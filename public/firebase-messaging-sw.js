importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.2/firebase-messaging.js');

const firebaseConfig = {
	apiKey: "AIzaSyBKuu5rj91gGcZyzpVs1_SBxEjNJqxAltY",
	authDomain: "quiz-app-b5789.firebaseapp.com",
	projectId: "quiz-app-b5789",
	storageBucket: "quiz-app-b5789.appspot.com",
	messagingSenderId: "1011423662058",
	appId: "1:1011423662058:web:1dfb06a9dc011f16296c93"
              };
  firebase.initializeApp(firebaseConfig);
  firebase.messaging();