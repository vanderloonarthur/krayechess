const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const https = require('https');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const feedbackFilePath = path.join(__dirname, 'feedback.json');

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// CORS configuration
const corsOptions = {
  origin: ['https://www.arpross.com', 'http://127.0.0.1:3000'],
};

app.use(cors(corsOptions));

// Endpoint to receive feedback
app.post('/feedback', (req, res) => {
  const feedbackData = req.body;

  // Write the feedback data to the JSON file
  fs.readFile(feedbackFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading feedback file:', err);
      return res.status(500).send('Error reading feedback data');
    }

    let existingFeedback = [];
    try {
      existingFeedback = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing existing feedback data:', parseErr);
      return res.status(500).send('Error parsing existing feedback data');
    }

    existingFeedback.push(feedbackData);

    fs.writeFile(feedbackFilePath, JSON.stringify(existingFeedback, null, 2), (writeErr) => {
      if (writeErr) {
        console.error('Error saving feedback data:', writeErr);
        return res.status(500).send('Error saving feedback data');
      }
      res.status(200).send('Feedback submitted successfully');
    });
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Set up HTTPS server
const server = https.createServer({
  key: fs.readFileSync(path.resolve(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, 'cert.pem'))
}, app);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
