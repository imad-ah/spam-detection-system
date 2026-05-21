# 🛡️ SafeMail — AI-Powered Spam Detection System

An end-to-end Machine Learning and Deep Learning framework designed to detect spam and malicious text messages (SMS) and emails. This project features a fully dynamic dashboard to analyze text inputs and predict content security in real-time.

---

## 🚀 Live Demo
You can try the fully deployed application directly through the link below:
👉 **[Launch SafeMail Dashboard](https://pfe-spam-detection-spam-detection.hf.space)** *(Full-screen web application)*.

---

## 📊 Project Overview
This repository contains the complete codebase for the SafeMail analytical dashboard. The system evaluates text messages using advanced natural language processing architectures to safeguard user communication.

### Key Features
* **Dual-Inference Architecture:** Compares and evaluates classical Machine Learning models alongside optimized Transformers.
* **Production-Ready UI:** Dynamic dashboard for processing single messages or analyzing custom batch datasets.
* **Performance Metrics:** Low false-positive configuration to ensure legitimate emails (Ham) are rarely misclassified.

---

## 🧠 Methodology & Models
We developed and benchmarked multiple architectures to ensure the highest balance between accuracy and inference speed:

1. **Deep Learning Framework:** Fine-tuned **DistilBERT** (`distilbert-base-uncased`) utilized for high-context classification.
2. **Classical Machine Learning:** Benchmarked `Naive Bayes`, `Support Vector Machines (XGBoost)`, `Random Forest`, and `Artificial Neural Networks (ANN)`.
3. **Data Pipeline:** Text preprocessing, customized tokenization, and vectorization optimized for fast deployment.

---

## 🛠️ Tech Stack
* **Language:** Python
* **NLP & Deep Learning:** Transformers, Scikit-learn, TensorFlow / Keras
* **Web Framework:** Flask
* **Deployment & Containerization:** Docker, Hugging Face Infrastructure
