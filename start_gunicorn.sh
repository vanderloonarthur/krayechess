#!/bin/bash
# Activate the virtual environment
source /Users/mac/Desktop/reizen/arpross/.venv/bin/activate

# Start Gunicorn
exec gunicorn --config /Users/mac/Desktop/reizen/arpross/gunicorn_config.py arpross.wsgi:application

