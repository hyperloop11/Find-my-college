import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import login from './components/login';
import signup from './components/signup';
import home from './components/home';
import college from './components/college';
import institute from './components/institute';
import profile from './components/profile';
import reviews from './components/review';

//Stack
const Navigator = createStackNavigator({
  Home: { screen: home },
  Login: { screen: login },
  Signup: { screen: signup },
  College: { screen: college },
  Institute: { screen: institute },
  Profile: {screen: profile},
  Reviews: { screen: reviews },
});
//navigationOptions: ({ navigation }) => ({header: null,}), 

//link 1st one to open first
const App = createAppContainer(Navigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//for dependency issue
//https://reactnavigation.org/docs/4.x/getting-started
