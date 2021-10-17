import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../ScreenContainer';
//import  firebase from '../db';
import { auth } from '../firebase';


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

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {

        auth.createUserWithEmailAndPassword( email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        user.updateProfile({

          displayName: fname
        }).then(function () {


        }).catch(function (error){


        });
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });

  };
 
  return (
    <View style={styles.backbox}>

<View style={styles.startbox}>
  <View style={styles.topics}> 

        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
            onPress={

                () => navigation.navigate('Home')
            }>
        <Text style={styles.loginText}><h3>Home</h3></Text>
      </TouchableOpacity>

        </View>

        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Food_store_new')
       }>
            <Text style={styles.loginText}><h3>Food store</h3></Text>
        </TouchableOpacity>

        </View>


        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('About_us')
       }>
        <Text style={styles.loginText}><h3>About us</h3></Text>
        </TouchableOpacity>

        </View>


        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Contact_us')
       }>
        <Text style={styles.loginText}><h3>Contact us</h3></Text>
        </TouchableOpacity>

        </View>

        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Signup')
       }>
            <Text style={styles.loginText}><h3>SignUp</h3></Text>
        </TouchableOpacity>

        </View>


        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Login')
       }>
            <Text style={styles.loginText}><h3>Login</h3></Text>
        </TouchableOpacity>

        </View>




  </View>

  </View>


    <View style={styles.signup}>
  
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
        value={fname}
        onChangeText={text => setFname(text)}
      />
    </View>


    <View style={styles.display1}><h3>Last Name</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your last name"
        placeholderTextColor="#003f5c"
        value={lname}
        onChangeText={text => setLname(text)}
      />
    </View>

   
  

    <View style={styles.display1}><h3>Email Address</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your address"
        placeholderTextColor="#003f5c"
        value={email}
        onChangeText={text => setEmail(text)}
      />
    </View>


    <View style={styles.display1}><h3>User name</h3></View>


    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter your User name"
        placeholderTextColor="#003f5c"
        value={username}
        onChangeText={text => setUsername(text)}
      />
    </View>

    <View style={styles.display1}><h3>Password</h3></View>
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter you password"
        placeholderTextColor="#003f5c"
       value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
    </View>

  

    <TouchableOpacity style={styles.  signupBtn_new}>
     
        <Button title="Sign up"
            onPress={register }
            >
  </Button>
          
   
    </TouchableOpacity>
  </View>
  </View>

  );
}
 
export default Signup;

 
const styles = StyleSheet.create({

  backbox: {

    width: "100%",
    height: "110%",
    backgroundColor: "white",
    
  },

  signup: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    //alignItems: "center",
    justifyContent: "center",
    width: "35%",
    height: "85%",
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
 
  signupBtn_new: {
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

startbox: {
  width: "100%",
  height: "15%",
  backgroundColor: "#0099CC",
 
  

},

topics: {
  width: "95%",
  height: "5%",
  //backgroundColor: "yellow",
  marginLeft: "10%",
  display: "flex",
  flexFlow: "row",

 },


first_topics: {
  width: "10%",
  height: "10%",
  //backgroundColor: "pink",
  marginLeft: "2%",
  marginTop: "2%",


 },



});