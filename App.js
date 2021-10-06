/*import { StatusBar } from "expo-status-bar";
import React from "react";
import Home from './component/js/home'
import Food_store from './component/js/food_store'
import Signup from './component/sign_up'
*/

//import {createStackNavigator} from 'react-navigation';
/*import { 
  createStackNavigator,
  

} from 'react-navigation-stack'

*/

/*
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const RootStack =createStackNavigator({
  Home:Home,
  Food_store:Food_store,
  Signup:Signup,

});

const App = createAppContainer(RootStack);

export default App;

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";



export default class App extends React.Component{

  render(){

      return <RootStack/>;
  }
}

*/

/*
export default function App(){

  return(
    <RootStack/>

  );

}
  */

/*
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator,createAppContainer } from 'react-navigation';



const RootStack = createStackNavigator(
  {
    Food_store: {
      screen: Food_store
    },
    Signup: {
      screen: Signup
    }
  },
  {
    initialRouteName: 'Home'
  }

);

export class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default createAppContainer(RootStack);
*/


/*
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function App(){

    return(

    <View style={styles.store_home}>
    <center><h1>Order Now</h1></center>

    <center><h2>Rice</h2></center>
    <View style={styles.food_toipic}>
 
          <View style={styles.photo}> 
          <Image style={styles.image_one} source={require("./assets/rice/biriyani.jpg")}></Image>
           
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Biriyani</b></li>
              <li><b>Price: Rs.700.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>
         
            </View>
         
          </View>
   

          <View style={styles.photo}> 

          <Image style={styles.image_one} source={require("./assets/rice/nasigurani.jpg")}></Image>
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Nasigurani</b></li>
              <li><b>Price: Rs.600.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

            </View>

        </View>


        <View style={styles.photo}> 

            <Image style={styles.image_one} source={require("./assets/rice/mixed_rice.png")}></Image>
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Mixed fride rice</b></li>
              <li><b>Price: Rs.800.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

            </View>

        </View>


    </View>


<br></br>

    <View style={styles.food_toipic}>
 
          <View style={styles.photo}> 
          <Image style={styles.image_one} source={require("./assets/rice/egg_rice.jpg")}></Image>
           
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Egg fride rice</b></li>
              <li><b>Price: Rs.400.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

            </View>
         
          </View>
   
         
          <View style={styles.photo}> 

          <Image style={styles.image_one} source={require("./assets/rice/sosejas.jpg")}></Image>
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Sosejas rice</b></li>
              <li><b>Price: Rs.450.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

            </View>

        </View>


        <View style={styles.photo}> 

            <Image style={styles.image_one} source={require("./assets/rice/chiken_rice.jpg")}></Image>
            <View style={styles.food_details}>
            <ul>
              <li><b>Name: Chiken fride rice</b></li>
              <li><b>Price: Rs.600.00</b></li>
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
              
              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

            </View>

        </View>


    </View>
    





    
<br></br>
<center><h2>Noodles</h2></center>
<View style={styles.food_toipic}>

    <View style={styles.photo}> 
    <Image style={styles.image_one} source={require("./assets/noodles/egg_noodles.jpg")}></Image>
     
      <View style={styles.food_details}>
      <ul>
              <li><b>Name: Egg noodles</b></li>
              <li><b>Price: Rs.400.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>
   
    </View>


    <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./assets/noodles/chiken.jpg")}></Image>
      <View style={styles.food_details}>
      <ul>
              <li><b>Name: Chiken nudles</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


  <View style={styles.photo}> 

      <Image style={styles.image_one} source={require("./assets/noodles/vegitable.jpg")}></Image>
      <View style={styles.food_details}>
      
      <ul>
              <li><b>Name: Vegitable noodles</b></li>
              <li><b>Price: Rs.350.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

      </View>

  </View>


</View>

  




<center><h2>Pasta</h2></center>
<View style={styles.food_toipic}>

    <View style={styles.photo}> 
    <Image style={styles.image_one} source={require("./assets/noodles/egg_pasta.jpg")}></Image>
     
      <View style={styles.food_details}>
      <ul>
              <li><b>Name: Egg pasta</b></li>
              <li><b>Price: Rs.350.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>
   
    </View>


    <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./assets/noodles/pasta.jpg")}></Image>
      <View style={styles.food_details}>
      <ul>
              <li><b>Name:Chiken Pasta</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


  <View style={styles.photo}> 

      <Image style={styles.image_one} source={require("./assets/noodles/chiken_chees_pasta.jpg")}></Image>
      <View style={styles.food_details}>
      
      <ul>
              <li><b>Name: Chiken chees pasta</b></li>
              <li><b>Price: Rs.800.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

      </View>

  </View>


</View>







<center><h2>Koththu</h2></center>
<View style={styles.food_toipic}>

    <View style={styles.photo}> 
    <Image style={styles.image_one} source={require("./assets/noodles/egg_koththu.jpg")}></Image>
     
      <View style={styles.food_details}>
      <ul>
              <li><b>Name: Egg koththu</b></li>
              <li><b>Price: Rs.350.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

      </View>
   
    </View>


    <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./assets/noodles/koththu.jpg")}></Image>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


  <View style={styles.photo}> 

      <Image style={styles.image_one} source={require("./assets/noodles/chees_koththu.jpg")}></Image>
      <View style={styles.food_details}>
      
      <ul>
              <li><b>Name: Chees pasta</b></li>
              <li><b>Price: Rs.700.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


</View>





<center><h2>Others</h2></center>
<View style={styles.food_toipic}>

    <View style={styles.photo}> 
    <Image style={styles.image_one} source={require("./assets/noodles/shavarma.jpg")}></Image>
     
      <View style={styles.food_details}>
      <ul>
              <li><b>Name: Shawarma</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>
   
    </View>


    <View style={styles.photo}> 

    <Image style={styles.image_one} source={require("./assets/noodles/potato.jpg")}></Image>
      <View style={styles.food_details}>
      <ul>
              <li><b>Name:Potato chips</b></li>
              <li><b>Price: Rs.300.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


  <View style={styles.photo}> 

      <Image style={styles.image_one} source={require("./assets/noodles/barger.jpg")}></Image>
      <View style={styles.food_details}>
      
      <ul>
              <li><b>Name: Berger</b></li>
              <li><b>Price: Rs.400.00</b></li>
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>

      </View>

  </View>


</View>




  </View>

    );

}

export default App;


const styles = StyleSheet.create({
 
  store_home: {

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

  one_box: {

    width: "32%",
    height: "85%",
    backgroundColor: "white",
    marginTop: "1%",
    marginLeft: "1%",
    borderRadius: 20,
    borderWidth: "1%",
    borderColor: "grey",
    
  },
  

  photo: {

    width:"27%",
    height: "100%",
    backgroundColor: "#0099CC",
    marginLeft: "3.5%",
    borderRadius: 20,

  },

   image_one: {

    width:"72%",
    height: "42%",
    borderRadius: 20,
    marginLeft: "12%",
    marginTop: "2%",

   },

   food_details: {

      width: "90%",
      height: "35%",
      
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

  
*/
/*
import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';



import Home from './component/js/home';
import Food_store from './component/js/food_store';

//import {createStackNavigator } from 'react-navigation';



const RootStack = createStackNavigator({

  Home:Home,
  Food_store:Food_store,

})


export default class App extends React.Component{
  render(){

      return <RootStack/>
  }

}

*/

/*
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { createStackNavigator } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation-stack';

import Home from './component/js/home';
import Food_store from './component/js/food_store';


const RootStack = createStackNavigator({
  Home: {
    screen: Home
  },
  Signup: {
    screen: Food_store
  }
});

  const App = createAppContainer(RootStack);

  export default App;

  */

 
  import React, { Component } from 'react';
  import Container from './ScreenContainer';

  export default class  App extends Component{
  render() {
    return (
      <Container />
    );
  }
}

