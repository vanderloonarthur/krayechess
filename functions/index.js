const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.receiveFeedback = functions.https.onRequest((req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const feedbackData = req.body;

    // Handle the feedback data, e.g., store it in Firestore
    const db = admin.firestore();
    db.collection('feedback').add(feedbackData)
        .then(docRef => {
            res.status(200).send({ message: 'Feedback received successfully!', id: docRef.id });
        })
        .catch(error => {
            res.status(500).send({ error: 'Error receiving feedback', details: error });
        });
});