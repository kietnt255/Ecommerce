FROM node:18-alpine as node-backend

WORKDIR /backend

COPY backend/package*.json ./

RUN npm install

COPY backend/ .

EXPOSE 5000

FROM python:3.10.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /backend

COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir

COPY . .

COPY --from=node-backend /backend /backend/node-backend

EXPOSE 8000 5000

COPY start.sh .
RUN chmod +x start.sh

CMD ["./start.sh"]
