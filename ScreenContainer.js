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

});

const Container = createAppContainer(NavigationStack);

export default Container; 