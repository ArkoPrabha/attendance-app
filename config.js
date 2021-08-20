import * as firebase from 'firebase';

var firebaseConfig = {
  // Put your database config
  apiKey: 'AIzaSyC0QTeJYWe8MomrU6a1AhsyWodMo6MP5Wc',
  authDomain: 'attendance-45880.firebaseapp.com',
  databaseURL: 'https://attendance-45880-default-rtdb.firebaseio.com',
  projectId: 'attendance-45880',
  storageBucket: 'attendance-45880.appspot.com',
  messagingSenderId: '958013906957',
  appId: '1:958013906957:web:e0530abbf78593d0573544',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
