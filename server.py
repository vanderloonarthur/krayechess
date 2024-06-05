from http.server import HTTPServer, BaseHTTPRequestHandler
import json

class FeedbackHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        feedback_data = json.loads(post_data.decode('utf-8'))

        try:
            # Handle the feedback data (e.g., store it in a file or database)
            with open('feedback.txt', 'a') as f:
                f.write(f"Feedback: {feedback_data['feedback']}, Reaction: {feedback_data['reaction']}, Additional Comments: {feedback_data['additionalComments']}\n")
        except Exception as e:
            print(f"Error writing to feedback.txt: {e}")

        # Send a response
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Thank you for your feedback!')

    def do_GET(self):
        # Send a 200 OK response for GET requests
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Hello, World! This is a GET request response.')

        # Alternatively, you can customize the response based on your requirements

def run(server_class=HTTPServer, handler_class=FeedbackHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
