import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAylqIC6gqRmG1nfTdQuQQ06wwQtK3cNzs",
  authDomain: "rtc-project-afc61.firebaseapp.com",
  databaseURL: "https://rtc-project-afc61.firebaseio.com",
  projectId: "rtc-project-afc61",
  storageBucket: "rtc-project-afc61.appspot.com",
  messagingSenderId: "787302436167",
  //appId: "1:787302436167:web:290e12512d5f7a3a615062",
  //measurementId: "G-RGCNVC1LFK",
};
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
