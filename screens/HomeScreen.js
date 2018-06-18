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
                <Button title="Login"
                    onPress={() => this.props.navigation.navigate('Login')}/>
            </View>
        );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
