# Ecommerce
Ecommerce website for my advanced database project

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
![276](https://github.com/K-izme/Ecommerce/assets/91515708/997c383b-c43a-4801-98c9-601cf92b87c6)
