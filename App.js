import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import About from './components/About';
import Search from './components/Search';
import Donnee from './components/Donnee';
import HomeScreen from './components/HomeScreen';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import LoadingScreen from './components/LoadingScreen';

import * as firebase from 'firebase';  
import { createTransformer } from 'babel-jest';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB1FZD3nuH79CU2WZagdvNCNXL0t5wwBtQ",
  authDomain: "ecoxygen-a32b5.firebaseapp.com",
  databaseURL: "https://ecoxygen-a32b5.firebaseio.com",
  projectId: "ecoxygen-a32b5",
  storageBucket: "ecoxygen-a32b5.appspot.com",
  messagingSenderId: "963207595042",
  appId: "1:963207595042:web:35602013bc981bc502767b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen 
})




const TabNavigator = createMaterialBottomTabNavigator(
  {
    Accueil: {
      screen: LoginScreen,
    },
    Donnée: {
      screen: Donnee,
    },
    Map: {
      screen: About,
    },
    Recherche: {
      screen: Search,
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon:true,
      showLabel:false,
      indicatorStyle:{
      height:4
      },
      style: {
        size:22,
        backgroundColor:"#a2273C",
        borderTopWidth:1,
        borderColor: "#3f101c"
      }
    },
    
  }
);

const Redirection = createSwitchNavigator(
  {
    Loading: LoadingScreen,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: "Loading"
  }
)

export default createAppContainer(Redirection);
