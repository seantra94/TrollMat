import React from 'react';
import {AppLoading, Asset} from 'expo';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/profile-icon.png'),
    ]);
    await Promise.all([...imageAssets]);
  }
  
  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <TrollNav/>;
  }
}

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}



//#region 
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
    inactiveTintColor: '#94b8c2'
  }
});
//#endregion
