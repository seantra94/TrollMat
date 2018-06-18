import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.pageContainer}>
                <Button title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}/>
            </View>
        );
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
