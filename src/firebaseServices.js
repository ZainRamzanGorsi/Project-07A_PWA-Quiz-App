import firebase from "firebase";


const firebaseConfig = {
	apiKey: "AIzaSyBKuu5rj91gGcZyzpVs1_SBxEjNJqxAltY",
	authDomain: "quiz-app-b5789.firebaseapp.com",
	projectId: "quiz-app-b5789",
	storageBucket: "quiz-app-b5789.appspot.com",
	messagingSenderId: "1011423662058",
	appId: "1:1011423662058:web:1dfb06a9dc011f16296c93"
              };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}

export default firebase