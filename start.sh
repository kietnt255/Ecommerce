#!/bin/bash

# Start Node.js backend in the background
cd /backend/node-backend && npm start &

# Start Python backend
cd /backend && python manage.py runserver 0.0.0.0:8000 