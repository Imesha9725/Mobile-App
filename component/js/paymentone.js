import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../ScreenContainer';
import  firebase from '../../db';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function Paymentone({navigation}) {
  
  return (

    <View>



    </View>


  );

}

export default Paymentone;

/*

import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Button, Alert, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { auth } from '../firebase';

const Login = ({navigation}) => { 

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, serErrorPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");

    const login = async () => {

        //validation
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
        if (email.length == 0) {
            setErrorEmail("*Email feild is empty");
            return;
          } else {
            setErrorEmail("");
          }
        if (reg.test(email) === false) {
          setErrorEmail("*Invalid email address");
          return;
        } else {
          setErrorEmail("");
        }
        if (password.length == 0) {
          serErrorPassword("*Password feild is empty");
          return;
        } else {
          serErrorPassword("");
        }
    
        // firebase
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
        });
        
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
              navigation.replace('HomePage')
              var uid = user.uid;
              // ...
            } else {
              
            }
    });

        return unsubscribe;
    }, []);

    return(
        <SafeAreaView>
            <View style={styles.styledCon}>
                <View style={styles.styledCon}>
                    <Image style={styles.pageLogo} source={require('../assets/images/home1.jpg')} />

                    <Text style={styles.pageTitle}>Log In  <MaterialIcons name="lock-outline" size={28} color="black" /></Text>

                    <TextInput
                        placeholder='Email'
                        label="Email"
                        style={styles.input}
                        autoFocus
                        autoCompleteType="email"
                        value={email}
                        onChangeText={(email) => setEmail(email)}
                    />
                    {errorEmail.length != 0 && <Text style={styles.error}>{errorEmail}</Text>}

                    <TextInput
                        placeholder='Password'
                        label="Email"
                        style={styles.input}
                        autoFocus
                        autoCompleteType="password"
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                    {errorPassword.length != 0 && (<Text style={styles.error}>{errorPassword}</Text>)}

                    <View style={styles.forgotPassword}>
                        <TouchableOpacity
                        >
                        <Text style={styles.forgot}>Forgot your password?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity 
                        onPress={login}
                        style={styles.button}>
                        <Text style={styles.btnText}>Log In  <AntDesign name="arrowright" size={23} color="black" /></Text>
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <Text style={styles.forgot}>Don’t have an account? </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={styles.link}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rowc}>
                        <Text style={styles.copyright}>scheduleMe © 2021</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
        
    );
}

*/