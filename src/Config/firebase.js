import Firebase from 'firebase';

let config = {
  apiKey: 'AIzaSyBeWpWelIpajueHCGPGb2ODNnjjT4hgcxk',
  authDomain: 'chatapp-256a2.firebaseapp.com',
  databaseURL: 'https://chatapp-256a2.firebaseio.com',
  projectId: 'chatapp-256a2',
  storageBucket: 'chatapp-256a2.appspot.com',
  messagingSenderId: '659601497295',
  appId: '1:659601497295:web:f2c76739abc8d72f456bba',
  measurementId: 'G-K3DKNZEK69',
};

let app = Firebase.initializeApp(config);
export const db = app.database();
