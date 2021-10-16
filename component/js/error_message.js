import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,

} from "react-native";


function Erro_message(){

    return(

        <View style={styles.error_page}>

            <View style={styles.error_message}>

                <br></br><br></br><br></br><br></br><br></br>

                <center><h1>Firstly you should have to login the system. </h1></center>

            </View>

        </View>

    );


};

export default Erro_message;

const styles = StyleSheet.create({

error_page: {

    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",

},

error_message: {

    width: "35%",
    height: "50%",
    backgroundColor: "#0099CC",
    borderRadius: 20,
    marginLeft: "32%",
    marginTop: "10%",

},


});