import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSjm8lXcnWle9CaxIrNIg2j5WhaQnWi_U",
    authDomain: "catch-of-the-day-matt-britt.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-matt-britt.firebaseio.com",
  });

  const Base = Rebase.createClass(firebaseApp.database());

  export { firebaseApp };
  export default Base;