---
layout: default
title: D'Arthur is coming home
permalink: /Edinburgh.md/
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>D'Arthur is coming home</title>
  <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/style.css" />
  <style>
    body, html {
      height: 100%;
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: black;
      color: white;
    }
    body, p {
      color: white;
    }
    .center-text {
      font-size: 1.5vw;
      color: #FF2400;
      max-width: 80%;
      margin: 15px auto;
    }
      h1{
        color: green;
    }
    h2{
      color: red;
    }
    p {
      color: white;
    }
    .back-to-gallery {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background-color: red;
      color: white;
      text-decoration: none;
      font-weight: bold;
      border-radius: 5px;
      transition: background-color 0.3s, color 0.3s;
    }
    .back-to-gallery:hover {
      background-color: green;
      color: white;
    }
    .center-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      min-height: 100vh;
      overflow: hidden;
      max-width: 100%;
      margin: 0 auto;
    }
    .fullscreen-container {
      position: relative;
      width: 100%;
      max-height: 70vh;
      overflow: hidden;
    }
    .fullscreen-image {
      width: 100%;
      height: auto;
      object-fit: cover;
      opacity: 0;
      transition: opacity 1s ease-in-out;
    }
    .fullscreen-image.show {
      opacity: 1;
    }
    .center-text {
      font-size: 1.5vw;
      color: #FF2400;
      max-width: 80%;
      margin: 15px auto;
    }
    .small-image {
      cursor: pointer;
      max-width: 100%;
      height: auto;
      transition: transform 0.5s ease-in-out, opacity 1s ease-in-out, border 0.3s ease-in-out;
      opacity: 0;
      margin-top: 15px;
    }
    .small-image.show {
      opacity: 1;
      border: 3px solid #FF2400;
    }
    .modal {
      display: none;
      position: fixed;
      top: auto;
      right: 0; /* Stick to the right */
      bottom: 0;
      left: auto; /* Unset left */
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      overflow: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      pointer-events: none; /* Clicks on the modal won't trigger events */
}
    .modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 100%; /* Adjusted max-width */
  max-height: 100%; /* Adjusted max-height */
  object-fit: contain;
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
}
    .modal-image {
      width: 100%;
      height: auto;
      max-width: 100vw; /* Adjusted max-width to fit the viewport width */
      max-height: 100vh; /* Adjusted max-height to fit the viewport height */
      object-fit: contain;
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    .modal.fade-in {
      animation: fadeIn 2s ease-in-out; /* Increased duration to 2 seconds */
      opacity: 1;
    }
    .modal.fade-out {
      opacity: 0;
    }
    /* Add a transition for the fade-out effect */
    .modal.fade-out .modal-content {
      transition: opacity 1s ease-in-out;
    }
    .modal:hover .modal-content {
      box-shadow: 0 0 30px rgba(255, 215, 0, 1);
    }
    @media only screen and (max-width: 1200px) {
      .center-text {
        font-size: 2vw;
      }
    }
    @media only screen and (max-width: 768px) {
      .center-text {
        font-size: 3vw;
      }
    }
    .modal-video {
  width: 80%; /* Adjust as needed */
  max-width: 800px; /* Maximum width for larger screens */
  border-radius: 10px;
  overflow: hidden;
}
.modal-video video {
  width: 100%;
  height: auto;
  border-radius: 10px;
  outline: none; /* Remove default focus outline */
}
.modal-video::-webkit-media-controls {
  /* Style the default video controls for WebKit browsers */
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
}
.modal-video::-webkit-media-controls-play-button {
  /* Style the play button */
  color: white;
}
.modal-video::-webkit-media-controls-volume-slider {
  /* Style the volume slider */
  background-color: transparent;
}
  </style>
</head>
<body>
<div class="center-content">
  <div id="newText" style="display: block;">
    <h1>D'Arthur is coming home!</h1>
    <img src="{{ site.baseurl }}/assets/images/refugees.png" alt="Edinburgh" class="small-image" />
    <figcaption>Vluchtelingen</figcaption>
  </div>
  <div class="center-text">
    <h2>Een waargebeurd verhaal.</h2>
    <p>
      10 April, 2024
      In de trein naar Antwerpen.
      Ik ben onderweg naar de bruiloft van mijn neef Duncan in Edinburgh.
      Ik zit nu in de trein en kan elk moment de grens naar België oversteken. Ik had een enkeltje Den Haag gekocht, maar niet naar Antwerpen, want heb nog maar 67 euro. Hopen dat de conducteurs me niet eruit zetten. Daar komt er al één. Shit.
    </p>
    <p>
      On a mission from god!
      Ik ben zojuist ternauwernood ontsnapt aan de treinconducteurs. Ik proefde onraad op Breda Centraal, dus was daar uitgestapt. De trein zou 6 minuten stil blijven staan.
      Toen vertelde mijn intuïtie me dat ik trein weer in moest stappen. Echter zat ik nu in het gangpad naast een prachtig getatoeëerde meneer. Ik voelde een sterke connectie met hem. Ik deed mijn capuchon van mijn “PLO scarf” op en begon te wachten. Ik wist dat er vrijwel altijd gecontroleerd wordt bij een grensovergang en zowaar ik zag de conducteur al druk bezig met controle.
      Achter me hoorde ik de schuifdeuren opengaan en twee vrouwelijk conducteurs kwamen het gangpad op. [de man met de tatoeages riep “Hij heeft een mes, waarop ik antwoorde: “Ja ik heb er 2.”]
      Toen hoorde ik de bevrijdende stem van de machinist: “Volgende halte: Noorder kempen!”
      En ik deed alsof ik hier moest uitstappen.
      De twee vrouwelijke conducteurs trapten erin en ik ging de schuifdeuren door naar het volgende gangpad.
      Daar kwam de mannelijke conducteur me tegemoet en ik groette hem beleefd. Zo snel als de treindeuren opengingen ben ik uitgestapt. Nu heerlijk koffie op het terras, in Noorder Kempen.
      In de trein naar Calais.
      Vanaf Noorder Kempen ben ik meegelift met Mohammed tot aan Antwerpen. Hij zette me op een druk tankstation, langs de kant van de weg af. Ik stond in de berm, dus moest rennen om over te steken en niet geraakt te worden door langsrijdende auto’s.
      Een maal bij het tankstation aangekomen vroeg ik een Engelsman om een lift. Hij zei echter dat hij de andere kant opging en dat hij me dus niet kon helpen.
      Toen ik verder liep en andere mensen vroeg stopte de Engelsman zijn auto. Hij gaf me 25 euro en zei dat ik het beste met de trein naar Calais kon gaan. Ik heb maar zijn advies opgevolgd en zit nu ontspannen in de trein naar Calais Ville. Wel ben ik nu 51,60 euro’s lichter. Prijskaartjes zijn tamelijk prijzig. Met nog maar 11 euro over op de bank zal ik het moeten redden. Misschien stuurt mijn oud-huisgenoot Miguel me nog zijn restschuld van 325 euro anders wordt het erg moeilijk. Hopelijk steek ik vannacht nog het kanaal over naar Dover. Anders zal ik moeten overnachten in Calais.
    </p>
    <p>
      11th of April, 2024. 2 days until the wedding.
      I was just dropped off to the ferry port by an English woman and her son. Just a couple of hours before I met a bunch of Sudanese immigrants all trying to go to Britain.
    </p>
    <p>
      Vanaf Antwerpen heb ik een treinkaartje gekocht, met de 25 euro, die een vriendelijke Engelsman me gaf, naar Calais.
      Eenmaal in Calais ben ik Antoine tegen het lijf gelopen. Hij bood me een biertje aan en we speelden een potje schaak. Ik zei dat ik wanhopig hulp nodig had en hij gaf me 50 euro. Hiermee heb ik in “Hotel de la Plage” geslapen. Ik was vergeten uit te checken en ben weggegaan voor het ontbijt.
    </p>
    <p>
      De volgende dag, donderdag 11 april, ging ik op zoek naar een tankstation om te vragen of iemand me over het kanaal wilde smokkelen.
      Eerst heb ik zo’n anderhalf uur gelopen tot ik bij een “geschikt tankstation” aankwam. Toen heb ik zo’n 4 à 5 uur iedereen aangesproken om te vragen voor een lift, maar niemand durfde me mee te nemen.
      Naast mij zag ik ook een aantal dozijn vluchtelingen uit Sudan, wanhopig op zoek naar een lift. Ik zag er 2 richting een busje lopen. De één leidde de chauffeur af terwijl de andere naar binnen klauterde. Die zal nu wel in Engeland zijn.
      Uiteindelijk vroeg ik een dame en haar zoon of ze me kon meenemen. Ze zei dat ze zondag pas ging, maar dat zou natuurlijk te laat zijn. Wel bracht ze me naar de ferry’s.
      </p>
      <img src="{{ site.baseurl }}/assets/images/Me_and_Richard.jpg" alt="Me and Richard">
      <p>
      Aldaar ontmoette ik Louis en Richard. Louis had een half jaar door India gereisd en was net weer onderweg naar huis. Hij was erg amicaal, met enkele mankementen en praatte veel. Hij stelde me erg op mijn gemak.
      Richard was een Roma, ex-militair, die blind was geraakt bij de Ariana Grande aanslag in Manchester. Gek genoeg voerde hij de groep aan, ondanks dat hij beperkt was, was hij toch ook heel erg bekwaam. Ik hoefde niet lang te wachten voordat Richard naar de balie liep en drie ferry tickets regelde.
      Het was een stormachtige bootreis, we zongen Halleluja buiten op de boot en hielpen een Indiaas stel met een stuk of 5 kinderen met hun bagage.</p>
      <video controls class="modal-video">
      <source src="{{ site.baseurl }}/assets/videos/halleluja.mp4" type="video/mp4">
      </video>
      <p>
      Een uur nadat we in Dover aankwamen gaf de broer van Louis ons een lift naar Birmingham. We zaten achter in het witte busje tussen een hoop gereedschap en ondanks dat het harde houten vloeren had voelde ik me erg ontspannen.
      Ik en Louis hebben een hoop gekletst achter in het busje en toen we in Birmingham aankwamen bood hij me aan het verblijf in de “Travellodge” te betalen.
      Helaas moesten we voor 02:00 uur ingecheckt hebben en was het al 03:00 uur.
      Louis raakte in paniek en stak zijn armen in de lucht richting de camera’s en riep: “we are refugees!”
      De deskmedewerkster dreigde met de politie, dus zijn we snel weer weggelopen. Ik kreeg een houten bord van Louis met daarop geschreven zijn aantekeningen van zijn reis door India. Hier heb ik “Edinburgh” op de achterkant geschreven om te gebruiken als liftbordje.
      Richard vertelde me dat ik het meeste kans had bij het CEN, wat een uurtje lopen bleek te zijn, bij de luchthaven.
      Aldaar heb ik mijn ogen gesloten en even geslapen.
    </p>
    <p>
      Vrijdag 12 april, 2024
      Ik werd wakker en langzaam kwam de realiteit terug. Even wat koffie gedronken en wat gegeten en toen ging ik onderweg naar het dichtstbijzijnde tankstation.
      Echter wilde niemand me een lift geven, dus na een paar uurtjes besloot ik naar het volgende tankstation te lopen.
      Dit tankstation lag in de richting van Nottingham, Manchester en Liverpool.
      Ook hier wilde niemand me een lift geven. Gelukkig belde Richard me na een paar uur via Instagram. Hij bood me aan de bus naar Edinburgh te betalen, waar ik blij op inging, dus Richard haalde me op in een Uber, we aten McDonalds en ik stapte op de bus naar Edinburgh.
    </p>
    <p>
      Zaterdag 13 april, 2024
      Om 9 uur s’ ochtends kwam ik aan waarna ik naar Arthur’s Seat liep om het eind van de “parkrun” mee te maken.
    </p>
  </div>
</div>
<!-- Back to Gallery button -->
<div style="text-align: center;">
  <a href="{{ site.baseurl }}/travelblog.md/" class="back-to-gallery">Back to Gallery</a>
</div>

<div id="myModal" class="modal" onclick="toggleModal()">
  <div class="modal-content">
    <img src="{{ site.baseurl }}/assets/images/refugees.png" alt="Popup Image" class="modal-image" />
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const smallImage = document.querySelector("#newText .small-image");
    const modal = document.getElementById('myModal');
    const modalImage = document.querySelector(".modal-image");

    smallImage.addEventListener("click", function (event) {
      if (event.target.classList.contains('small-image')) {
        modalImage.src = event.target.src;
        modal.style.display = 'flex';
        modal.classList.add('fade-in');
        modal.style.pointerEvents = 'auto';
      }
    });

    modal.addEventListener("click", function () {
      modal.classList.add('fade-out');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('fade-out', 'fade-in');
        modal.style.pointerEvents = 'none';
      }, 1000);
    });

    setTimeout(function () {
      smallImage.classList.add('show');
      const fullscreenImage = document.querySelector(".fullscreen-image");
      fullscreenImage.classList.add('show');
    }, 500);

    const backButton = document.querySelector(".back-to-gallery");
    backButton.addEventListener("click", function () {
      window.location.href = "{{ site.baseurl }}/index/";
    });
  });
</script>
</body>
</html>
