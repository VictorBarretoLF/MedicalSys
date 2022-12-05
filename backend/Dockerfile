FROM python:3.9-slim-buster

WORKDIR /app

COPY . .

RUN pip3 install -r requirements.txt

CMD python manage.py makemigrations patient users scheduling && python manage.py migrate && python manage.py runserver 0.0.0.0:8000

