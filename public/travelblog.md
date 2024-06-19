---
title: Gallery
layout: collection
permalink: /travelblog.md/
collection: recipes
excerpt: "Baz Boom design system including logo mark, website design, and branding applications."
sidebar:
  - title: "Arthur Robert Pieter Ross"
    image: /assets/images/top_hat.jpeg
    image_alt: "Huldiging Diok"
    text: "Globetrotter"
---
<html lang="en">

<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-HB19E314J8"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-HB19E314J8');
  </script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Reis door Europa met Arthur Ross! Ontdek de schoonheid van Europa met deze boeiende reisverhalen.">
  <title>Gallery - Reis door Europa met Arthur Ross!</title>
  <style>
    body {
      color: red !important;
      background-color: black;
      font-family: 'Arial', sans-serif;
    }
    .image-gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
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
      background-color: #FFD700;
    }
    .image-item {
      overflow: hidden;
      border: 2px solid green;
      transition: border-color 0.3s;
    }
    .image-item img {
      width: 100%;
      height: auto;
      border: 2px solid transparent;
      transition: transform 0.3s ease-in-out, border-color 0.3s;
    }
    .image-item:hover img {
      transform: scale(1.2);
      border-color: white;
    }
    .image-caption {
      text-align: center;
      margin-top: 10px;
    }
    .golden-link {
      color: green !important;
      text-decoration: none;
      font-weight: bold;
    }
    .golden-link:hover {
      text-decoration: underline;
    }
    .golden-text {
      color: green !important;
    }
    .quote-container {
      position: fixed;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 300px;
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
      animation: fadeIn 0.3s ease-out;
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
      transition: color 0.3s;
    }
    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
    }
    .modal-content {
      background-color: #f8f8f8;
      color: #333;
      padding: 20px;
      border: 1px solid #888;
      width: 90%;
      max-width: 800px;
      border-radius: 5px;
      margin: auto;
    }
    .modal-content textarea {
      width: 100%;
      background-color: #333;
      color: #fff;
      border: 1px solid #888;
      border-radius: 5px;
      padding: 10px;
      resize: none;
    }
    .feedback-text {
      color: #FFD700;
    }
    @media only screen and (max-width: 768px) {
      .image-gallery {
        grid-template-columns: 1fr;
      }
      .modal-content {
        width: 90%;
      }
    }
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
          <p class="golden-text">Naar Milaan zonder geld of plan [mei 2016]</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/madrid.md/" class="golden-link">
        <img src="/assets/images/bear-1.jpg" alt="Madrid" />
        <div class="image-caption">
          <p class="golden-text">Vincent van Gogh achterna [juni/ juli 2020]</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/stuttgart.html/" class="golden-link">
        <img src="/assets/images/stag3.jpeg" alt="Stuttgart" />
        <div class="image-caption">
          <p class="golden-text">Marshall Stuttgart [december 2020]</p>
        </div>
      </a>
    </div>
    <div class="image-item">
      <a href="/Edinburgh.md/" class="golden-link">
        <img src="/assets/images/Edinburgh.webp" alt="Edinburgh" />
        <div class="image-caption">
          <p class="golden-text">D'Arthur is coming home! [april 2024]</p>
        </div>
      </a>
    </div>
  </div>

  <button onclick="openModal()">Geef Feedback</button>

  <!-- Feedback Modal -->
  <div id="feedback-modal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal()">&times;</span>
      <h2>Hoe blij bent u met de website?</h2>
      <div id="feedback-buttons">
        <button onclick="selectFeedback(this, 'Very Happy', '😃')" aria-label="Very Happy">Very Happy 😃</button>
        <button onclick="selectFeedback(this, 'Happy', '😊')" aria-label="Happy">Happy 😊</button>
        <button onclick="selectFeedback(this, 'Neutral', '😐')" aria-label="Neutral">Neutral 😐</button>
        <button onclick="selectFeedback(this, 'Unhappy', '😞')" aria-label="Unhappy">Unhappy 😞</button>
        <button onclick="selectFeedback(this, 'Very Unhappy', '😢')" aria-label="Very Unhappy">Very Unhappy 😢</button>
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
  <button id="scrollUpBtn" onclick="scrollToTop()" aria-label="Scroll to Top">Scroll to Top</button>

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
      var reaction = selectedButton ? selectedButton.getAttribute('aria-label') : '';
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
      var url = "http://127.0.0.1:8000/receive_feedback/";  // URL to your Django endpoint
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/json");

      // Construct the JSON payload
      var payload = JSON.stringify({
        feedback: feedback,
        reaction: reaction,
        additional_comments: additionalComments
      });

      // Handle response
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Feedback sent successfully:', xhr.responseText);
          } else {
            console.error('Error in sending feedback:', xhr.status, xhr.responseText);
          }
        }
      };

      // Send the POST request with the feedback data
      xhr.send(payload);
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.onscroll = function () {
      var scrollUpBtn = document.getElementById("scrollUpBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
      } else {
        scrollUpBtn.style.display = "none";
      }
    };
  </script>
</body>

</html>