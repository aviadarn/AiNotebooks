#!/bin/bash

# Start script for Doctor Marketplace API

echo "=========================================="
echo "Doctor Marketplace API - Starting Server"
echo "=========================================="

# Check if virtual environment exists
if [ ! -d "venv" ]; then
    echo "Error: Virtual environment not found!"
    echo "Please run: python3 -m venv venv && source venv/bin/activate && pip install -r requirements.txt"
    exit 1
fi

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Check if MongoDB is running
echo "Checking MongoDB connection..."
if ! docker ps | grep -q mongodb; then
    echo "Warning: MongoDB container not found!"
    echo "Starting MongoDB with docker-compose..."
    cd .. && docker-compose up -d && cd api
fi

# Start Flask server
echo "Starting Flask API server on http://localhost:5000"
echo "Press Ctrl+C to stop the server"
echo "=========================================="
python app.py
