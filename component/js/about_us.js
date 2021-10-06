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


function About_us(){

    return(


     <View style={styles.about_us}>
       
       <View style={styles.main}><h1>About us</h1></View>
       <View style={styles.para}>
        <center>We are provide food services for you. Please visit our system and ordering your lunch or dinner.<h4> Delivery free.</h4></center>
        <br></br><br></br>

        <center><h3>Manage it all with ease</h3></center>
        
        With reliable delivery from delivery people using the our platform, you can satisfy customers with the food they want—when and where they want it.Our offerings are flexible so you can customize them to your needs. Get started with your delivery people or ours.

       <br></br>
       </View>
       <View style={styles.image_box}>
       <Image style={styles.image_new} source={require("./../../assets/delivery.png")}></Image> 
       <Image style={styles.image_new} source={require("./../../assets/delivary_2.jpg")}></Image> 
       <Image style={styles.image_new} source={require("./../../assets/delivery_3.png")}></Image> 
       </View>

    </View>
  

    );

}

export default About_us;


const styles = StyleSheet.create({

    about_us: {
     width: "100%",
     height: "100%",
     
   
    },
   
     main: {
       width: "95%",
       height: "10%",
       marginLeft: "2%",
       marginTop: "1%",
       backgroundColor: "#0099CC",
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 15,
   
     },
     para: {
   
       width:"85%",
       height: "30%",
       marginTop: "3%",
       marginLeft: "6%",
       marginRight: "10",
     },
   
     image_box: {
       marginTop: "5%",
       marginLeft: "5%",
       width: "95%",
       height: "60%",
       display: "flex",
       flexFlow: "row",
   
     },
     
     image_new: {
   
       width: "25%",
       height: "50%",
       marginLeft: "4%",
       borderRadius: 15,
     },
   });
   