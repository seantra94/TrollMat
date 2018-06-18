import React from 'react';
import Expo from 'expo';
import { StyleSheet, Text, View, Button } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <TrollNav/>;
  }
}


const TrollNav = createStackNavigator({
  Login: LoginScreen,
  Home: HomeScreen,
});

const styles = StyleSheet.create({
  container: {
  },
});

