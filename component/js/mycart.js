import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../../ScreenContainer';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function Mycart({navigation}) {

    return(

            <View style={styles.cart}>

                <center> <h1>My cart</h1> </center>

                <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./../../assets/noodles/koththu.jpg")}></Image>
      <View style={styles.food_details}>
      <ul>
              <li><b>Name:Chiken koththu</b></li>
              <li><b>Price: Rs.500.00</b></li>
              <li><b>FoodCount:</b> <TextInput
                style={styles.TextInput}
                placeholder="Enter food counter"
                placeholderTextColor="#003f5c"
               onChangeText={(email) => setEmail(email)}
            /></li>
            </ul>

            <TouchableOpacity style={styles.  buy_button}>
            <Text style={styles.loginText}><b>ORDER NOW</b></Text>
              </TouchableOpacity>

              
      </View>

  </View>



            </View>

    );


}

export default Mycart;

const styles = StyleSheet.create({

    cart: {

        width: "100%",
        height: "100%",
        backgroundColor: "#d3d3d3",
    },

    photo: {

        width:"23%",
        height: "70%",
        backgroundColor: "#0099CC",
        marginLeft: "3.5%",
        borderRadius: 20,
    
      },
    
       image_one: {
    
        width:"72%",
        height: "45%",
        borderRadius: 20,
        marginLeft: "12%",
        marginTop: "2%",
    
       },
    
       food_details: {
    
          width: "95%",
          height: "45%",
          
          backgroundColor: "#0099CC",
          borderRadius: 20,
          marginLeft: "5%",
       },
    
       buy_button: {
        width: "60%",
        borderRadius: 20,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        marginTop:"5%",
        backgroundColor: "white",
        marginBottom:15,
        marginLeft: "18%",
    
      },
    
      
    
      TextInput: {
        height: 20,
        width: "35%",
        flex: 1,
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: "white",
      },

});