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
  RadioButton,

} from "react-native";


function Paymentone({navigation}) {
  
  return (

    <View style={styles.Cart}>

      <center><h1>Select your Payment Method</h1></center>

      
      <View style={styles.Big}>

          <View style={styles.box}>
              <View style={styles.small}>

              <Image style={styles.image_one} source={require("./../../assets/noodles/credit.jpg")}></Image>

              </View>

              <View style={styles.small1}>

            

              </View>

          </View>



          <View style={styles.box}>

             <View style={styles.small}>

             <Image style={styles.image_one} source={require("./../../assets/noodles/payhere.png")}></Image>

          </View>

          <View style={styles.small1}>



              </View>

          </View>



      </View>

    </View>


  );

}

export default Paymentone;

const styles = StyleSheet.create({

  Cart : {

    width: "100%",
    height: "100%",
    backgroundColor: "#d3d3d3",

  },

  Big: {

    width: "40%",
    height:"75%",
    marginLeft: "30%",
    marginTop: "2%",
    backgroundColor: "#0099CC",
    borderRadius: 20,
  },

  box: {

    width: "95%",
    height: "45%",
    marginTop: "2%",
    marginLeft: "2%",
    //backgroundColor: "yellow",
    display: "flex",
    flexFlow: "row",
    
  },

  small: {

    width: "45%",
    height: "90%",
    marginLeft: "2%",
    marginTop: "2%",
    //backgroundColor: "red",

  },

  image_one: {

    width: "100%",
    height: "90%",
    marginTop: "2%",
    borderRadius: 10,

  },

});





