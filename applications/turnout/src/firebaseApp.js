import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyB1SwtDXZvP9V73Ktq8Bg6hV53v4GUmE64",
    authDomain: "turnout-f2796.firebaseapp.com",
    databaseURL: "https://turnout-f2796.firebaseio.com",
    projectId: "turnout-f2796",
    storageBucket: "",
    messagingSenderId: "994554255484"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')