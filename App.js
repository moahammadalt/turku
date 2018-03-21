import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cs } from './helpers';
import App_router from './config/router';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';


export default class App extends React.Component {

  constructor(props) {
    super(props);
  
    cs('hiiiiii');
  }
  render() {
    return (
      <App_router />
    );
  }
}