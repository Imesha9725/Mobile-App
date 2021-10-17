import { StatusBar } from "expo-status-bar";
import React, { useState , useEffect } from "react";
import Container from '../ScreenContainer';
import { auth } from '../firebase';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,

} from "react-native";


function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = () => {

    // firebase
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        navigation.replace('Food_store_new')
        alert("Login Succesfully")
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Please enter correct email & password');
});

};
 
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
          value={email}
          onChangeText={(email) => setEmail(email)}
        />

      
      </View>

      <View style={styles.display}><h3>Password</h3></View>

 
      <View style={styles.inputView_new}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#003f5c"
         
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
       
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
       
      <Button title="Sign up"
            onPress={login}
            >
  </Button>

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

