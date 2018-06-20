import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
                <Text>You are now on the profile screen!</Text>
            </View>
        );
    }
}

export default ProfileScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
