import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../ScreenContainer';
//import firebase from '../db';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


 function Signup({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  return (
    <View style={styles.signup}>
    <br></br>
    <View style={styles.add_color}>
    
  </View>

    <View style={styles.topic} ><h1 color="red">Sign up</h1></View>
    <StatusBar style="auto" />
    <View style={styles.display1}><h3>First Name</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your first name"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>


    <View style={styles.display1}><h3>Last Name</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your last name"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

     <View style={styles.display1}><h3>Contact Number</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your email address"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.display1}><h3>Address</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your address"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>


    <View style={styles.display1}><h3>User name</h3></View>


    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your User name"
        placeholderTextColor="#003f5c"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
    </View>

    <View style={styles.display1}><h3>Password</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter you password"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <View style={styles.display1}><h3>Comfirm password</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your password again"
        placeholderTextColor="#003f5c"
        onChangeText={(email) => setEmail(email)}
      />
    </View>

    <TouchableOpacity style={styles.  signupBtn}
     
      
            onPress={

                () => navigation.navigate('Login')
            }>
            <Text style={styles.loginText}>SignUp</Text>
   
    </TouchableOpacity>
  </View>
  );
}
 
export default Signup;

 
const styles = StyleSheet.create({
  signup: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    //alignItems: "center",
    justifyContent: "center",
    width: "35%",
    height: "80%",
    marginLeft: "30%",
    marginTop: "2%",
    marginBottom: "2%",
    borderRadius: 25,
    
  },

  add_color: {

    width: "100%",
    height: "5%",
    //backgroundColor: "red",
    
  },
 
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    height: 40,
    marginBottom: 15,
    alignItems: "center",
    marginLeft: "3%",
  },

  display1: {

    marginLeft: "3%",

  },

  topic: {

   textAlign : "center",
   marginTop: "0.5%",

  },
 
  TextInput: {
    height: 20,
    width: "100%",
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
 
  /*forgot_button: {
    height: 30,
    marginBottom: 30,
   
  },
  */
 
  signupBtn: {
    width: "80%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#1e90ff",
    marginBottom:30,
    marginLeft: "9%",

  },

 h3: {

 marginLeft: "20%",
 },

 images: {
  flex: 1,
  justifyContent: "center",
  width: "100%",
  

},


});