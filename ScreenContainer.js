import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Home from './component/js/home';
import Food_store from './component/js/food_store';
import Login from './component/login';
import Contact_us from './component/js/contact_us';
import About_us from './component/js/about_us';
import Signup from './component/sign_up';

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

});

const Container = createAppContainer(NavigationStack);

export default Container; 