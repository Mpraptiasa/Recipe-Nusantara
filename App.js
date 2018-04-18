import React from 'react';
import { StyleSheet, Text, Button,  TouchableHighlight, View, } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/Home';
import TambahScreen from './src/Tambah';
import LihatScreen from './src/Lihat';

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>RECIPE NUSATARA</Text>
      </View>
    );
  }
}

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
    },
    TambahScreen: {
      screen: TambahScreen,
    },
    LihatScreen: {
      screen: LihatScreen,
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
);
export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
