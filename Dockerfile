FROM python:3.9

# إنشاء مستخدم عادي حيت Hugging Face مابغيش الـ Root user لدواعي أمنية
RUN useradd -m -u 1000 user
USER user
ENV PATH="/home/user/.local/bin:${PATH}"

# تحديد مجلد العمل داخل الحاوية (Container)
WORKDIR /app
EXPOSE 5000
# نسخ ملف المكتبات أولاً وتثبيتها باش الـ Cache يسرع الـ Build من بعد
COPY --chown=user requirements.txt requirements.txt
RUN pip install --no-cache-dir --upgrade -r requirements.txt

# نسخ كاع ملفات المشروع (الملف app.py، الموديل، المجلدات static و templates)
COPY --chown=user . /app

# الأمر اللي غيشغل بيه Hugging Face تطبيق Flask ديالك
CMD ["python", "app.py"]