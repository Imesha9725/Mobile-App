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


function Customer_profile({navigation}){

 

    return(

       <View style={styles.home}>

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

           () => navigation.navigate('Feedback')
       }>
        <Text style={styles.loginText}><h3>Feedback</h3></Text>
        </TouchableOpacity>

        </View>

        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Customer_profile')
       }>
            <Text style={styles.loginText}><h3>Go to profile</h3></Text>
        </TouchableOpacity>

        </View>


        <View style={styles.first_topics}>
        <TouchableOpacity style={styles.loginBtn}
       
       onPress={

           () => navigation.navigate('Home')
       }>
            <Text style={styles.loginText}><h3>Logout</h3></Text>
        </TouchableOpacity>

        </View>


  </View>

  </View>

           <center> <h2>My Profile</h2></center>
           <View style={styles.profile}>

                <View style={styles.dashboard}>


                </View>

        <View style={styles.main}>

            <View style={styles.box}>

      <Image style={styles.image} source={require("./../../assets/noodles/potato.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/biriyani.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/noodles/sanvich.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/nasigurani.jpg")}></Image>

      </View>
      

      <View style={styles.box}>

      <Image style={styles.image} source={require("./../../assets/noodles/pasta.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/mix_rice.jpg")}></Image> 
      <Image style={styles.image} source={require("./../../assets/noodles/koththu.jpg")}></Image>
      <Image style={styles.image} source={require("./../../assets/rice/chiken_rice.jpg")}></Image>


      </View>
    
      </View>



           </View>




  </View>

    );

}

export default Customer_profile;

const styles = StyleSheet.create({

home: {

        width:"100%",
        height: "100%",
        backgroundColor: "white",
    
},
food_toipic: {

    width: "100%",
    height: "28%",
    //backgroundColor: "green",
    display: "flex",
    flexFlow: "row",
    
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

   profile: {

        width: "100%",
        height: "72%",
        // backgroundColor: "yellow",
        display: "flex",
        flexFlow: "row",
   },

   main : {

    width: "72%",
    height: "100%",
    // backgroundColor: "red",
    marginLeft: "2%",
    borderRadius: 15,
   
   },

  dashboard: {

        width: "22%",
        height: "100%",
        backgroundColor: "#0099CC",
        marginLeft: "2%",
        borderRadius: 15,
       
   },

   box: {

    width: "100%",
    height: "50%",
    // backgroundColor: "#0099CC",
    borderRadius: 15,
    display: "flex",
    flexFlow: "row",
   },

   image: {
  
    marginLeft: "3%",
    marginTop: "1%",
    width: "22%",
    height: "90%",
    borderRadius: 15,

  },

});
