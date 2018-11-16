import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyCj0h9oD10YY8wi6kl7KzX8Cw408utOmdA",
        authDomain: "reactproject-9bb15.firebaseapp.com",
        databaseURL: "https://reactproject-9bb15.firebaseio.com",
        projectId: "reactproject-9bb15",
        storageBucket: "reactproject-9bb15.appspot.com",
        messagingSenderId: "19409654999"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
