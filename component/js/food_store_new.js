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



function Food_store_new({navigation}){

    return(

        
    <View style={styles.store_home}>

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

           () => navigation.navigate('Food_store_new')
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

    <center><h1>Order Now</h1></center>

    <center><h2>Rice</h2></center>
    <View style={styles.food_toipic}>
 
          <View style={styles.photo}> 
          <Image style={styles.image_one} source={require("./../../assets/rice/biriyani.jpg")}></Image>
           
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

          <Image style={styles.image_one} source={require("./../../assets/rice/nasigurani.jpg")}></Image>
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

            <Image style={styles.image_one} source={require("./../../assets/rice/mixed_rice.png")}></Image>
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
          <Image style={styles.image_one} source={require("./../../assets/rice/egg_rice.jpg")}></Image>
           
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

          <Image style={styles.image_one} source={require("./../../assets/rice/sosejas.jpg")}></Image>
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

            <Image style={styles.image_one} source={require("./../../assets/rice/chiken_rice.jpg")}></Image>
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
    <Image style={styles.image_one} source={require("./../../assets/noodles/egg_noodles.jpg")}></Image>
     
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

    <Image style={styles.image_one} source={require("./../../assets/noodles/chiken.jpg")}></Image>
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

      <Image style={styles.image_one} source={require("./../../assets/noodles/vegitable.jpg")}></Image>
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
    <Image style={styles.image_one} source={require("./../../assets/noodles/egg_pasta.jpg")}></Image>
     
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

    <Image style={styles.image_one} source={require("./../../assets/noodles/pasta.jpg")}></Image>
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

      <Image style={styles.image_one} source={require("./../../assets/noodles/chiken_chees_pasta.jpg")}></Image>
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
    <Image style={styles.image_one} source={require("./../../assets/noodles/egg_koththu.jpg")}></Image>
     
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

              <TouchableOpacity style={styles.  buy_button}>
              <Text style={styles.loginText}><b>ADD TO CART</b></Text>
              </TouchableOpacity>


      </View>

  </View>


  <View style={styles.photo}> 

      <Image style={styles.image_one} source={require("./../../assets/noodles/chees_koththu.jpg")}></Image>
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
    <Image style={styles.image_one} source={require("./../../assets/noodles/shavarma.jpg")}></Image>
     
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

    <Image style={styles.image_one} source={require("./../../assets/noodles/potato.jpg")}></Image>
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

      <Image style={styles.image_one} source={require("./../../assets/noodles/barger.jpg")}></Image>
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

export default Food_store_new;


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

  startbox: {
    width: "100%",
    height: "5%",
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

  /*one_box: {

    width: "32%",
    height: "90%",
    backgroundColor: "white",
    marginTop: "1%",
    marginLeft: "1%",
    borderRadius: 20,
    borderWidth: "1%",
    borderColor: "grey",
    
  },
  */

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

      width: "95%",
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