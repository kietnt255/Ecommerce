# Ecommerce
Ecommerce website for my advanced database project

Demo: https://www.youtube.com/watch?v=mJaRnei4NIc

[![Watch the video](https://img.youtube.com/vi/mJaRnei4NIc/maxresdefault.jpg)](https://youtu.be/mJaRnei4NIc)

Create an .env file and set these vars to connect to the PostgreSQL database (AWS RDS)

```
DB_ENGINE=django.db.backends.postgresql
DB_NAME=
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_PORT=5432
AWS_REGION=
ECR_REPOSITORY=
ECS_SERVICE=
ECS_CLUSTER=
ECS_TASK_DEFINITION=
CONTAINER_NAME=

GEMINI_API_KEY= 

```

Build the docker images, tag to push images to docker repo

```
docker build -t ecom .
docker tag ecom kietngo255/ecom:latest
```

Or easily using 
```
docker-compose up
```

Add the secret credentials to your github action and try to deploy using AWS ECS

![277](https://github.com/K-izme/Ecommerce/assets/91515708/331f3d2b-1d13-4c62-b901-c08f354cb4c3)

## Chatbot

![alt text](media\images/image.png)

