/**
 * Main App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Admob from './App/Components/Admob.js';
import App from './App/App.js';

export default class isach extends Component {
  render() {
    return (
      <App />
      
    );
  }
}

AppRegistry.registerComponent('isach', () => isach);
