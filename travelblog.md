---
title: Gallery
layout: collection
permalink: /travelblog.md/
collection: recipes
excerpt: "Baz Boom design system including logo mark, website design, and branding applications."
sidebar:
  - title: "Arthur Robert Pieter Ross"
    image: /assets/images/top_hat.jpeg
    image_alt: "logo"
    text: "Globetrotter"
---
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Reis door Europa met Arthur Ross! Ontdek de schoonheid van Europa met deze boeiende reisverhalen.">
  <title>Gallery - Reis door Europa met Arthur Ross!</title>

  <style>
    /* Additional styles for better formatting */
    body {
      color: red !important; /* Set the text color to red */
      background-color: black; /* Set the background color to black */
      font-family: 'Arial', sans-serif;
    }

    .image-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    #scrollUpBtn {
      display: none;
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #daa520;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s;
    }

    #scrollUpBtn:hover {
      background-color: #FFD700; /* Change color on hover */
    }

    .image-item {
      margin-bottom: 20px;
      overflow: hidden; /* Hide overflow to prevent layout shifts on hover */
    }

    .image-item img {
      width: 100%;
      transition: transform 0.3s ease-in-out; /* Add transition effect */
    }

    .image-item:hover img {
      transform: scale(1.2); /* Increase the scale on hover */
    }

    .image-caption {
      text-align: center;
    }

    .golden-link {
      color: red !important; /* Set the text color to red */
      text-decoration: none; /* Remove the default underline */
      font-weight: bold; /* Optionally set the font weight to bold */
    }

    .golden-link:hover {
      text-decoration: underline; /* Add underline on hover */
    }

    .golden-text {
      color: red !important; /* Set the text color to red */
    }

    /* Styles for moving the request a quote to the side */
    .quote-container {
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 300px; /* Adjust the width as needed */
      background-color: #f8f8f8;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .modal {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease-out; /* Entrance animation */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s; /* Smooth transition for hover effect */
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
}

/* Other modal styles remain the same */


    .modal-content {
  background-color: #f8f8f8; /* Adjust background color to match your website */
  color: #333; /* Adjust text color to match your website */
  padding: 20px;
  border: 1px solid #888;
  width: 90%; /* Adjust the width as needed for responsiveness */
  max-width: 800px; /* Increase the max-width for a larger modal */
  border-radius: 5px;
  margin: auto;
}


    .modal-content textarea {
      width: 100%;
      background-color: #333; /* Darken the background color of the textarea */
      color: #fff; /* Adjust text color to match your website */
      border: 1px solid #888;
      border-radius: 5px;
      padding: 10px;
      resize: none;
    }

    .feedback-text {
      color: #FFD700; /* Set the text color to yellow */
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
    }

    /* Responsive styles */
    @media only screen and (max-width: 768px) {
      .image-gallery {
        justify-content: center;
      }

      .image-item {
        width: 100%;
      }

      .modal-content {
        width: 90%;
      }
    }

    /* Added style for selected feedback button */
    .selected-feedback {
      background-color: #FFD700 !important;
    }
  </style>
</head>

<body>
  <div class="image-gallery">
    <div class="image-item">
      <a href="/milaan.md/" class="golden-link">
        <img src="/assets/images/il_duomo.jpeg" alt="Milaan" />
        <div class="image-caption">
          <p class="golden-text">Naar Milaan zonder geld of plan</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/madrid.md/" class="golden-link">
        <img src="/assets/images/bear-1.jpg" alt="Madrid" />
        <div class="image-caption">
          <p class="golden-text">Vincent van Gogh achterna</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/stuttgart.md/" class="golden-link">
        <img src="/assets/images/stag3.jpeg" alt="Stuttgart" />
        <div class="image-caption">
          <p class="golden-text">Marshall Stuttgart</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/Edinburgh.md/" class="golden-link">
        <img src="/assets/images/Edinburgh.webp" alt="Edinburgh" />
        <div class="image-caption">
          <p class="golden-text">D'Arthur is coming home</p>
        </div>
      </a>
    </div>
  </div>

  <button onclick="openModal()">Give Feedback</button>

  <!-- Feedback Modal -->
  <div id="feedback-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>How happy are you with the website?</h2>
      <div id="feedback-buttons">
        <button onclick="selectFeedback(this, 'Very Happy', '😃')">Very Happy</button>
        <button onclick="selectFeedback(this, 'Happy', '😊')">Happy</button>
        <button onclick="selectFeedback(this, 'Neutral', '😐')">Neutral</button>
        <button onclick="selectFeedback(this, 'Unhappy', '😞')">Unhappy</button>
        <button onclick="selectFeedback(this, 'Very Unhappy', '😢')">Very Unhappy</button>
      </div>
      <div>
        <label for="additionalComments">Additional Comments:</label>
        <textarea id="additionalComments" rows="4" placeholder="Enter your comments here..."></textarea>
      </div>
      <button onclick="submitFeedback()">Submit Feedback</button>
    </div>
  </div>

  <p>Please tell us what you think of the website. We appreciate your support!</p>

  <!-- Scroll-up button -->
  <button id="scrollUpBtn" onclick="scrollToTop()">Scroll to Top</button>

  <script>
    function openModal() {
      document.getElementById("feedback-modal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("feedback-modal").style.display = "none";
    }

    function selectFeedback(button, feedback, reaction) {
      document.querySelectorAll('#feedback-buttons button').forEach(function (btn) {
        btn.classList.remove('selected-feedback');
      });
      button.classList.add('selected-feedback');
      console.log('Selected Feedback:', feedback, 'Reaction:', reaction);
    }

    function submitFeedback() {
      var selectedButton = document.querySelector('#feedback-buttons button.selected-feedback');
      var feedback = selectedButton ? selectedButton.textContent : '';
      var reaction = selectedButton ? selectedButton.getAttribute('data-reaction') : '';
      var additionalComments = document.getElementById("additionalComments").value;
      console.log('Feedback:', feedback, 'Reaction:', reaction, 'Additional Comments:', additionalComments);

      sendFeedback(feedback, reaction, additionalComments);

      var confirmationMessage = document.createElement('p');
      confirmationMessage.innerText = 'Thank you for your feedback!';
      var modalContent = document.querySelector('.modal-content');
      modalContent.appendChild(confirmationMessage);

      setTimeout(function () {
        closeModal();
      }, 2000);
    }

    function sendFeedback(feedback, reaction, additionalComments) {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", 'https://localhost:3000/submit-feedback', true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log('Feedback submitted successfully');
        } else if (xhr.readyState === 4) {
          console.error('Error submitting feedback:', xhr.status);
        }
      };
      xhr.send(JSON.stringify({ feedback, reaction, additionalComments }));
    }

    window.onscroll = function () {
      var scrollUpBtn = document.getElementById("scrollUpBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
      } else {
        scrollUpBtn.style.display = "none";
      }
    };

    function scrollToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  </script>
</body>

</html>
