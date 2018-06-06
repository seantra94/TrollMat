import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render(){
        return (
            <Text>Home Screen</Text>
        );
    }
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default createStackNavigator({
    Home: {
      screen: HomeScreen
    },
});