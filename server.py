from http.server import HTTPServer, BaseHTTPRequestHandler
from urllib.parse import parse_qs

class FeedbackHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        feedback = parse_qs(post_data.decode('utf-8'))

        # Handle the feedback data (e.g., store it in a file or database)
        with open('feedback.txt', 'a') as f:
            f.write(f"Feedback: {feedback.get('feedback')[0]}, Reaction: {feedback.get('reaction')[0]}, Additional Comments: {feedback.get('additionalComments')[0]}\n")

        # Send a response
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Thank you for your feedback!')

    def do_GET(self):
        # Send a 405 Method Not Allowed response for GET requests
        self.send_response(405)
        self.send_header('Content-type', 'text/plain')
        self.send_header('Allow', 'POST')
        self.end_headers()
        self.wfile.write(b'Method Not Allowed: Only POST requests are supported for this endpoint.')

def run(server_class=HTTPServer, handler_class=FeedbackHandler, port=8000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()
