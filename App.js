import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return <TrollNav/>;
  }
}

//Creates a bottom navigation bar. 
const TrollNav = createBottomTabNavigator({
  Profile: { 
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name="ios-person" size={32} color={tintColor} />
      )
    }
  },
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name='ios-home' size={32} color={tintColor} />
      )
    }
  },
}, {
//Navigation bar settings
  initialRouteName: 'Home',
  order: ['Home', 'Profile'],
  //Navbar settings
  navigationOptions: {
    tabBarVisible: true,
  },
  //Tab settings
  tabBarOptions: {
    activeTintColor: '#28536b',
    inactiveTintColor: '#6a8d92'
  }
});

