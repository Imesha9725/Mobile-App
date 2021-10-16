import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import Container from '../../ScreenContainer';
import  firebase from '../../db';
//import { ListItem, Avatar} from 'react-navtive-elements';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";
import { createStackNavigator } from "react-navigation-stack";


function Mycart({navigation}) {

  const [cart, setCart] = useState([]);

  useEffect( () => {

      firebase.db.collection('cart').onSnapshot(querySnapshot => {
        const cart= [];

        querySnapshot.docs.forEach(doc => {

          const {id, quantity, food_id} =doc.data()
          cart.push({
            id: doc.id,
            id,
            quantity,
            food_id
          })
      });
      setCart(cart)

    });
  }, [])

    return(

            <View style={styles.cart}>

                <center> <h1>My cart</h1> </center>
               
              <View style={styles.qua}>
                {

cart.map(cart => {

  return(

                <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./../../assets/noodles/koththu.jpg")}></Image>

    


      <View style={styles.food_details}>
      <ul>
              <li><b>Name:Chiken koththu</b></li>
              <li><b>Price: Rs.500.00</b></li>
              <li><b>FoodCount:</b> <TextInput
                style={styles.TextInput}
               
                placeholderTextColor="#003f5c"
              value={cart.quantity}
            /></li>
            </ul>

            <TouchableOpacity style={styles.  buy_button}>
            <Text style={styles.loginText}><b>ORDER NOW</b></Text>
              </TouchableOpacity>         
      </View>

    
 

  </View>

)
})
}

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
        // display: "flex",
        // flexFlow: "row",
    },

    qua: {

      width: "100%",
      height: "85%",
      //backgroundColor: "yellow",
      display: "flex",
      flexFlow: "row",
  },

    photo: {

        width:"23%",
        height: "80%",
        backgroundColor: "#0099CC",
        marginLeft: "3.5%",
        borderRadius: 20,
    

      },
    
       image_one: {
    
        width:"72%",
        height: "45%",
        borderRadius: 20,
        marginLeft: "12%",
        marginTop: "5%",
    
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