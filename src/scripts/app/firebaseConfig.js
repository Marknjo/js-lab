const { FIREBASE_API_KEY } = process.env;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'cloud-ca-fe.firebaseapp.com',
  databaseURL: 'https://cloud-ca-fe.firebaseio.com',
  projectId: 'cloud-ca-fe',
  storageBucket: 'cloud-ca-fe.appspot.com',
  messagingSenderId: '59389411602',
  appId: '1:59389411602:web:cb9fbbdd38d48f6db1b3cb',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({ timestampsInSnapshots: true, merge: true });

export default db;
