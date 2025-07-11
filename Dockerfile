FROM python:3.10.9

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /Backend

COPY requirements.txt .

RUN pip install -r requirements.txt --no-cache-dir

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
