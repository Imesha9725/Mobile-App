import { StatusBar } from "expo-status-bar";
import React, { useState,Components } from "react";
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


function Home({navigation}){

 

    return(

      <View style={styles.home}>

      <View style={styles.topics}> 

        <View style={styles.first_topics}>
         <Button
            title="Home"
            style={styles.go_button}
            onPress={

                () => navigation.navigate('Home')
            }
      
           ></Button>
        </View>

        <View style={styles.first_topics}>
            <Button
              title="Food Store"
              style={styles.  go_button}
              onPress={

                 () => navigation.navigate('Food_store')
              }
      
            ></Button>

        </View>


        <View style={styles.first_topics}>
            <Button
              title="About us"
              style={styles.  go_button}
              onPress={

                 () => navigation.navigate('About_us')
              }
      
            ></Button>

        </View>


        <View style={styles.first_topics}>
            <Button
              title="Contact us"
              style={styles.  go_button}
              onPress={

                 () => navigation.navigate('Contact_us')
              }
      
            ></Button>

        </View>

        <View style={styles.first_topics}>
            <Button
              title="Sign Up"
              style={styles.  go_button}
              onPress={

                 () => navigation.navigate('Signup')
              }
      
            ></Button>

        </View>


        <View style={styles.first_topics}>
            <Button
              title="Login"
              style={styles.go_button}
              onPress={

                 () => navigation.navigate('Login')
              }
      
            ></Button>

        </View>




  </View>
      <View style={styles.hed}><h1>Online Restaurant...... Now You can Order..... Join with Us!</h1></View>
     
      <View style={styles.box}>

      <Image style={styles.image} source={require("./../../assets/noodles/barger.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/biriyani.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/noodles/sanvich.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/nasigurani.jpg")}></Image>

      </View>

      <View style={styles.second_box}>

      <Image style={styles.image} source={require("./../../assets/noodles/roman.jpg")}></Image> 
      <Image style={styles.image} source={require("./../../assets/noodles/koththu.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/noodles/shavarma.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/noodles/chiken.jpg")}></Image>

      </View>

      <View style={styles.third_box}>

      <Image style={styles.image} source={require("./../../assets/noodles/pasta.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/mix_rice.jpg")}></Image> 
      <Image style={styles.image} source={require("./../../assets/noodles/potato.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/chiken_rice.jpg")}></Image>

      </View>

   

    </View>

    );

}

export default Home;

const styles = StyleSheet.create({
 
  home: {
    width: "100%",
    height: "160%",
    backgroundColor: "#1e90ff",
   // backgroundColor: "green",
  
  
  },
  
  hed: {
    
    textAlign: "center",
  
  },
  
  box: {
  
    width: "100%",
    height: "25%",
    //backgroundColor: "red",
    display: "flex",
    flexFlow: "row",
  
  },
  
  second_box: {
  
    width: "100%",
    height: "25%",
    //backgroundColor: "red",
    display: "flex",
    flexFlow: "row",
    marginTop: "1%",
  
  },
  
  third_box: {
  
    width: "100%",
    height: "25%",
    //backgroundColor: "red",
    display: "flex",
    flexFlow: "row",
    marginTop: "1%",
  
  },
  
    image: {
  
      marginLeft: "3.2%",
      marginTop: "1%",
      width: "20%",
      height: "87%",
      borderRadius: 15,
  
    },

   topics: {
    width: "90%",
    height: "10%",
    //backgroundColor: "pink",
    marginLeft: "15%",
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

  h1: {
  
  textAlign: "center",
  
  }
  
  });