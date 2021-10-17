import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../ScreenContainer';
import  firebase from '../db';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function Login({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (

    <View style={styles.special}>
    <View style={styles.container}>
       
      <Image style={styles.image} source={require("./../assets/blue.jpg")} />
      <View style={styles.topicnew}> <h1>Login</h1></View>
      <StatusBar style="auto" />
      <View style={styles.display}><h3>User name</h3></View>
      <View style={styles.inputView_new}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your user name"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.display}><h3>Password</h3></View>

 
      <View style={styles.inputView_new}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}
       
            onPress={

                () => navigation.navigate('Food_store_new')
            }>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

export default Login;
 
const styles = StyleSheet.create({

  special: {

    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    //alignItems: "center",
    justifyContent: "center",
    width: "30%",
    height: "70%",
    marginLeft: "33%",
    marginTop: "5%",
    marginBottom: "8%",
    borderRadius: 25,
    
    
  },
 

 
  inputView_new: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: "4%",
  },
 
  TextInput: {
    height: 20,
    width: "100%",
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: "35%",
  },

  topicnew: {

    textAlign : "center",
  },

  display: {

    marginLeft: "4%",

  },

 
  loginBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#1e90ff",
    marginBottom:30,
    marginLeft: "10%",
  },

  h3: {
    marginLeft:20,

  },

  image: {
    flex: 1,
    justifyContent: "center",
    

  },

});


/*

//import * as firebase from 'firebase';

import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
   
        apiKey: "AIzaSyBDg2WwG0sBWHKLLX1vQiELFR3B-0sYrUA",
        authDomain: "onlinerestaurant-9cf41.firebaseapp.com",
        projectId: "onlinerestaurant-9cf41",
        storageBucket: "onlinerestaurant-9cf41.appspot.com",
        messagingSenderId: "1098420949805",
        appId: "1:1098420949805:web:251691400d9650e01039a4",
        measurementId: "G-8KPBY7Z6T1"
     
};

let app;
if(firebase.apps.length === 0 ){

    app =firebase.initializeApp(firebaseConfig);

} else{

  app = firebase.app()
}


const db = app.firestore();
const auth = firebase.auth();

export default{

  firebase,
  db,
  auth
  
};

*/

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
