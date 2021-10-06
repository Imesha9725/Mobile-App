import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,

} from "react-native";

function Contact_us(){

    return(

<View style={styles.contact_us}>
       
       <View style={styles.main_new}><h1>Contact us</h1></View>
       <View style={styles.para_new}>
       <center><p>If you have any concerns or questions about our services or if you need any help,<br></br><br></br>
       Don't hesitate to contact us through the following,<br></br></p></center>
        <br></br><br></br>

  <View style={styles.List_item}>
        <ul>
       <li><b>Phone : XXXXXXXXXX</b></li>
       <li><b>Email : XXXXXXXXX@XXXXX.com</b></li>
       <li><b>Address : No. XX,XXXXXXXXXX,XXXXXXXXX,XXXXXXXX</b></li>
     </ul>

     </View>
     
   <center><p><br></br> Our team is waiting to help you!</p></center>

       <br></br><br></br>
       </View>
       <View style={styles.image_box_new}>
       <Image style={styles.image_new_01} source={require("./../../assets/contact_us_02.jpg")}></Image> 
       <Image style={styles.image_new_01} source={require("./../../assets/contact_us_01.jpg")}></Image> 
       <Image style={styles.image_new_01} source={require("./../../assets/contact_us_03.jpg")}></Image> 
       </View>

</View>


    );

}

export default Contact_us;


const styles = StyleSheet.create({

    contact_us: {
     width: "100%",
     height: "100%",
     
   
    },
   
     main_new: {
       width: "95%",
       height: "10%",
       marginLeft: "2%",
       marginTop: "1%",
       backgroundColor: "#0099CC",
       alignItems: "center",
       justifyContent: "center",
       borderRadius: 15,
   
     },
     para_new: {
   
       width:"85%",
       height: "30%",
       marginTop: "3%",
       marginLeft: "6%",
       marginRight: "10",
     },
   
     List_item: {
       width: "60%",
       height: "40%",
       marginLeft:"30%",
       
   
     },
   
     image_box_new: {
       marginTop: "5%",
       marginLeft: "5%",
       width: "95%",
       height: "60%",
       display: "flex",
       flexFlow: "row",
   
     },
     
     image_new_01: {
   
       width: "25%",
       height: "50%",
       marginLeft: "4%",
       borderRadius: 15,
     },
   });
   