/**
 * Main App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Posts from './Containers/Posts';
import Post from './Containers/Post';
import {StackNavigator} from 'react-navigation';

export default App = StackNavigator ({
	Posts: {screen: Posts},
	Post: {screen: Post},
}, {headerMode:"none"});
