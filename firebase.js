//import * as firebase from 'firebase';

import firebase from "firebase";
import "firebase/firestore";
import 'firebase/auth';

 const firebaseConfig = {
   
         apiKey: "AIzaSyBDg2WwG0sBWHKLLX1vQiELFR3B-0sYrUA",
         authDomain: "onlinerestaurant-9cf41.firebaseapp.com",
         projectId: "onlinerestaurant-9cf41",
         storageBucket: "onlinerestaurant-9cf41.appspot.com",
         messagingSenderId: "1098420949805",
         appId: "1:1098420949805:web:251691400d9650e01039a4",
        measurementId: "G-8KPBY7Z6T1"
     
 };

        // const firebaseConfig = {
        //   apiKey: "AIzaSyDvxaygfTiyKwONpObODsb-Pw0kSM-PaCg",
        //   authDomain: "onlineresturantnew.firebaseapp.com",
        //   projectId: "onlineresturantnew",
        //   storageBucket: "onlineresturantnew.appspot.com",
        //   messagingSenderId: "736499046092",
        //   appId: "1:736499046092:web:422187f5452d24a8735469"
        // };




let app;
if(firebase.apps.length === 0 ){

    app =firebase.initializeApp(firebaseConfig);

} else{

  app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();

export{

  db,
  auth,
  
};



// if(firebase.apps.length === 0){

//   firebase.initializeApp(firebaseConfig)
// }

// export { firebase };





/*
const firebaseConfig = {
    apiKey: "AIzaSyBDg2WwG0sBWHKLLX1vQiELFR3B-0sYrUA",
    authDomain: "onlinerestaurant-9cf41.firebaseapp.com",
    projectId: "onlinerestaurant-9cf41",
    storageBucket: "onlinerestaurant-9cf41.appspot.com",
    messagingSenderId: "1098420949805",
    appId: "1:1098420949805:web:251691400d9650e01039a4",
    measurementId: "G-8KPBY7Z6T1"
  };
  
  if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)
  }
  */