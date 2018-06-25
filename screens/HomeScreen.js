import React, { Component } from 'react';
import { View, 
         Text, 
         StyleSheet, 
         Button,
} from 'react-native';

class HomeScreen extends Component {
    render(){
        return (
            <View style={styles.pageContainer}>
                <View style={styles.pageContainer}>
                    <Text>You are now on the home screen!</Text>
                </View>
            </View>
        );
    }
}

//#region

export default HomeScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

//#endregion