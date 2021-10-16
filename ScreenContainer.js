import React, { Component } from 'react';


import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './component/js/home';
import Food_store from './component/js/food_store';
import Food_store_new from './component/js/food_store_new';
import Login from './component/login';
import Contact_us from './component/js/contact_us';
import About_us from './component/js/about_us';
import Signup from './component/sign_up';
import Customer_profile from './component/js/customer_profile';
import Feedback from './component/js/feedback';
import Quantity from './component/js/quantity';
import Mycart from './component/js/mycart';
import Edit_profile from './component/js/edit_profile';
import Erro_message from './component/js/error_message';

const NavigationStack = createStackNavigator({
    Home: { 
        screen:Home,
    },
    Food_store: { 
        screen: Food_store,
    },
    Login: {
        screen: Login,

    },
    Contact_us:{
        screen: Contact_us,

    },

    About_us: {
        screen: About_us,

    },

    Signup: {
        screen: Signup,

    },

    Food_store_new: {
        screen: Food_store_new,

    },

    Customer_profile: {
        screen: Customer_profile,

    },

    Feedback: {

        screen: Feedback,
    },

    Quantity: {

        screen: Quantity,
    },

    Mycart: {

        screen: Mycart,

    },

    Edit_profile: {

        screen: Edit_profile,
    },

    Erro_message: {

        screen: Erro_message,

    },

});

const Container = createAppContainer(NavigationStack);

export default Container; 

/*
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDg2WwG0sBWHKLLX1vQiELFR3B-0sYrUA",
    authDomain: "onlinerestaurant-9cf41.firebaseapp.com",
    projectId: "onlinerestaurant-9cf41",
    storageBucket: "onlinerestaurant-9cf41.appspot.com",
    messagingSenderId: "1098420949805",
    appId: "1:1098420949805:web:251691400d9650e01039a4",
    measurementId: "G-8KPBY7Z6T1"
  };
  
  if(firebase.apps.length === 0){

    firebase.initializeApp(firebaseConfig)
  }

*/