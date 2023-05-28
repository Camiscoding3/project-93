import firebase  from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD09MAPP2awO4V1wyVF6_cQadHN5bm2oL0",
  authDomain: "alarm-ac2d9.firebaseapp.com",
  databaseURL: "https://alarm-ac2d9-default-rtdb.firebaseio.com",
  projectId: "alarm-ac2d9",
  storageBucket: "alarm-ac2d9.appspot.com",
  messagingSenderId: "1066495241900",
  appId: "1:1066495241900:web:e189e2a38325983109b909"
};


firebase.initializeApp(firebaseConfig);

export default firebase;