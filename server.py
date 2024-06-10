from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/', methods=['GET', 'OPTIONS'])
def handle_root():
    if request.method == 'OPTIONS':
        # Handle OPTIONS request for CORS preflight
        response = jsonify({'message': 'Preflight request successful'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
    else:
        return jsonify({'message': 'Hello, World!'})

@app.route('/feedback', methods=['POST', 'OPTIONS'])
def receive_feedback():
    if request.method == 'OPTIONS':
        # Handle OPTIONS request for CORS preflight
        response = jsonify({'message': 'Preflight request successful'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response

    if request.method == 'POST':
        # Handle POST request to receive feedback data and store it in the database
        data = request.json  # Assuming JSON data is sent in the request body
        # Assuming you have a function to store feedback in the database
        # Replace this with your actual database handling code
        # For now, let's just print the received data
        print("Received feedback:", data)
        return jsonify({'message': 'Feedback received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
