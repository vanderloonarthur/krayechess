from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Connect to SQLite database
try:
    conn = sqlite3.connect('feedback.db')
    cursor = conn.cursor()

    # Create a table to store feedback data if not exists
    cursor.execute('''CREATE TABLE IF NOT EXISTS feedback (
                        id INTEGER PRIMARY KEY,
                        feedback TEXT,
                        reaction TEXT,
                        additional_comments TEXT
                    )''')
    conn.commit()
except Exception as e:
    print("Error connecting to database:", e)

@app.route('/', methods=['GET'])
def index():
    """
    Handle GET request to root route.
    """
    return jsonify({'message': 'Welcome to the feedback system!'})

@app.route('/feedback', methods=['POST'])
def receive_feedback():
    """
    Handle POST request to submit feedback.
    """
    try:
        data = request.json  # Assuming JSON data is sent in the request body

        # Insert feedback data into the database
        cursor.execute('''INSERT INTO feedback (feedback, reaction, additional_comments)
                          VALUES (?, ?, ?)''', (data['feedback'], data['reaction'], data['additional_comments']))
        conn.commit()
        return jsonify({'message': 'Feedback received and stored successfully'})
    except Exception as e:
        print("Error storing feedback:", e)
        return jsonify({'error': 'Failed to store feedback'})

if __name__ == '__main__':
    app.run(debug=True)
