import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Container from '../../ScreenContainer';
import  firebase from '../../db';

// import firebase from '../../db';



import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,

} from "react-native";


function Quantity({props}) {
 
  const [state, setState] = useState({

    quantity: "",
    id: "3",
    food_id: "5",
});

const handleChangeText = (quantity, value) => {

    setState({...state, [quantity]: value});
};

const giveQuantity = async () => {

    if(state.quantity == ''){

      alert('Please enter quantity')
    } else {

      await firebase.db.collection('cart').add({

          quantity: state.quantity,
          id: state.id,
          food_id: state.food_id

      })

      alert('insert successful')
    }

}

  return (
    <View style={styles.container}>
       
      
      <View style={styles.topicnew}> <h1>Please add hope to buy quantity of this foods</h1></View>
      <StatusBar style="auto" />
      <View style={styles.display}><h3>Quantity</h3></View>
      <View style={styles.inputView_new}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter quantity"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => handleChangeText('quantity',value)}
        />
      </View>

      <View >
        <TextInput
         
         
          onChangeText={(value) => handleChangeText('id',value)}
        />
      </View>

      <View >
        <TextInput
         
         
          onChangeText={(value) => handleChangeText('food_id',value)}
        />
      </View>

    

<br></br>
<TouchableOpacity style={styles.loginBtn}>
       <Button title="submit"
            onPress={

                () => giveQuantity()
            }
            >
            </Button>
        {/* <Text style={styles.loginText}>Submit</Text> */}
      </TouchableOpacity>
    </View>
  );
}

export default Quantity;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3",
    //alignItems: "center",
    justifyContent: "center",
    width: "38%",
    height: "25%",
    marginLeft: "30%",
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

 
  loginBtn: {
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

});