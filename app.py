import csv
import io
import os

from flask import Flask, render_template, request, jsonify

import torch
import torch.nn.functional as F

from transformers import (
    AutoTokenizer,
    AutoModelForSequenceClassification
)

# =====================================================
# FLASK APP
# =====================================================

app = Flask(__name__)

# =====================================================
# DEVICE
# =====================================================

device = torch.device("cpu")

# =====================================================
# LOAD MODEL
# =====================================================

MODEL_PATH = "./"

print("Loading model...")

tokenizer = AutoTokenizer.from_pretrained(
    MODEL_PATH
)

model = AutoModelForSequenceClassification.from_pretrained(
    MODEL_PATH
)

model.to(device)

model.eval()

print("Model loaded successfully!")

# =====================================================
# PREDICTION FUNCTION
# =====================================================

def predict_spam(text):

    encoding = tokenizer(
        text,
        return_tensors='pt',
        truncation=True,
        padding=True,
        max_length=128
    )

    input_ids = encoding['input_ids'].to(device)

    attention_mask = encoding['attention_mask'].to(device)

    with torch.no_grad():

        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask
        )

        probs = F.softmax(
            outputs.logits,
            dim=1
        )

        spam_score = probs[0][1].item()

        ham_score = probs[0][0].item()

        pred = torch.argmax(
            outputs.logits,
            dim=1
        ).item()

    result = "SPAM" if pred == 1 else "HAM"

    return {
        "result": result,
        "spam_score": round(spam_score * 100, 2),
        "ham_score": round(ham_score * 100, 2)
    }


def pick_message_column(fieldnames):

    if not fieldnames:

        return None

    preferred_names = [
        "message",
        "email",
        "text",
        "content",
        "body",
        "subject",
        "mail"
    ]

    lower_map = {
        name.lower().strip(): name
        for name in fieldnames
        if name
    }

    for name in preferred_names:

        if name in lower_map:

            return lower_map[name]

    return fieldnames[0]


def analyze_csv_file(file_storage, max_rows=500):

    raw = file_storage.read()

    try:

        content = raw.decode("utf-8-sig")

    except UnicodeDecodeError:

        content = raw.decode("latin-1")

    stream = io.StringIO(content)

    sample = stream.read(2048)

    stream.seek(0)

    try:

        dialect = csv.Sniffer().sniff(
            sample,
            delimiters=",;\t|"
        )

    except csv.Error:

        dialect = csv.excel

    reader = csv.DictReader(stream, dialect=dialect)

    message_column = pick_message_column(reader.fieldnames)

    if not message_column:

        return None, "CSV file must contain at least one column."

    rows = []

    spam_count = 0

    ham_count = 0

    for index, row in enumerate(reader, start=1):

        if index > max_rows:

            break

        message = (row.get(message_column) or "").strip()

        if not message:

            continue

        prediction = predict_spam(message)

        if prediction["result"] == "SPAM":

            spam_count += 1

        else:

            ham_count += 1

        rows.append({
            "row": index,
            "message": message,
            "preview": message[:140],
            **prediction
        })

    total = len(rows)

    return {
        "message_column": message_column,
        "total": total,
        "spam": spam_count,
        "ham": ham_count,
        "spam_rate": round((spam_count / total) * 100, 2) if total else 0,
        "ham_rate": round((ham_count / total) * 100, 2) if total else 0,
        "rows": rows
    }, None

# =====================================================
# ROUTES
# =====================================================

@app.route('/')

def home():

    return render_template(
        'index.html'
    )

@app.route('/predict', methods=['POST'])

def predict():

    data = request.get_json(silent=True) or {}

    text = data.get(
        'message',
        ''
    ).strip()

    if not text:

        return jsonify({
            "error": "Message text is required."
        }), 400

    result = predict_spam(text)

    return jsonify(result)


@app.route('/predict_csv', methods=['POST'])

def predict_csv():

    csv_file = request.files.get("file")

    if not csv_file or not csv_file.filename:

        return jsonify({
            "error": "CSV file is required."
        }), 400

    if not csv_file.filename.lower().endswith(".csv"):

        return jsonify({
            "error": "Please upload a .csv file."
        }), 400

    result, error = analyze_csv_file(csv_file)

    if error:

        return jsonify({
            "error": error
        }), 400

    return jsonify(result)

# =====================================================
# RUN APP
# =====================================================

if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=int(os.environ.get("PORT", 7860)),
        debug=False
    )