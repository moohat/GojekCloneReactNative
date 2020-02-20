/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Router from './src/config/router'

import {
  ScrollView,
  View,
} from 'react-native';






class App extends Component {
  render(){

    return (
      <Router />
    )
  }
};

export default App;




