import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../../ScreenContainer';
import  { auth, db } from '../../firebase';
import AsyncStorage from '@react-native-community/async-storage';


import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function Feedback({navigation}) {

  const [getValue, setGetValue] = useState('');

  AsyncStorage.getItem('userId').then(
      (value) =>
        setGetValue(value),
  );
  console.log(getValue);

  const [state, setState] = useState({

      feed: "",
      id: getValue,
  });

  const handleChangeText = (feed, value) => {

      setState({...state, [feed]: value});
  };

  const giveFeedback = async () => {

      if(state.feed == ''){

        alert('Please enter feedback')
      } else {

        await db.collection('feedback').add({

            feed: state.feed,
            id:getValue,
            // id: state.id,

        })

        alert('Feedback added successfully');
        navigation.navigate('Food_store_new');

      }

  }
  
  return (

    <View style={styles.main}>
    

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

    <View style={styles.container}>
       
      
      <View style={styles.topicnew}> <h1>Please give the feedback about our services</h1></View>
      <StatusBar style="auto" />
      <View style={styles.display}><h3>Feedback</h3></View>
      <View style={styles.inputView_new}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your feedback"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('feed',value)}
        />
      </View>

      <View >

           {/* { user={


              _id: auth?.currentUser?.email,
           }


           }
             */}

      
      </View>

<br></br>

      <TouchableOpacity style={styles.loginBtns}>
       <Button title="submit"
            onPress={

                () => giveFeedback()
            }
            >
            </Button>
        
      </TouchableOpacity>
    </View>

    </View>
  );
}

export default Feedback;
 
const styles = StyleSheet.create({

  main: {

    width: "100%",
    height: "100%",
  },

  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    //alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: "26%",
    marginLeft: "28%",
    marginTop: "8%",
    marginBottom: "8%",
    borderRadius: 25,
    
    
  },
 

 
  inputView_new: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "80%",
    height: 40,
    marginBottom: 20,
    alignItems: "center",
    marginLeft: "4%",
  },
 
  TextInput: {
    height: 20,
    width: "100%",
    flex: 1,
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
  },
 

  topicnew: {

    textAlign : "center",
  },

  display: {

    marginLeft: "4%",

  },

 
  loginBtns: {
    width: "75%",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
    backgroundColor: "#1e90ff",
    marginBottom:30,
    marginLeft: "8%",
  },

  h3: {
    marginLeft:20,

  },

  image: {
    flex: 1,
    justifyContent: "center",
    

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