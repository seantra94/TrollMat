import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Expo from 'expo';

class ProfileScreen extends Component {
    render() {
        return(
            <View style={styles.primaryContainer}>
                <View style={styles.topProfileBar}>
                    <Image source={require('../assets/profile-icon.png')} style={styles.profileImage}/>
                    <Text style={styles.welcomeText}>Welcome Sean</Text>
                </View>
                <View style={styles.pageContainer}>
                    <Text>Welcome to the profile screen!</Text>
                </View>
            </View>
        );
    }
}

//#region

export default ProfileScreen;

const styles = StyleSheet.create({
    primaryContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: Expo.Constants.statusBarHeight,
        backgroundColor: '#EBEBEB'
    },
    topProfileBar: {
        height: 80,
        flexDirection: 'row',
    },
    pageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        width: 80,
        height: 80,
    },
    welcomeText: {
        marginTop: 35,
    },
    
});

//#endregion