import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {AdMobBanner} from 'react-native-admob';

export default class Admob extends Component {
  render(){
    return(
      <View>
       <AdMobBanner
          bannerSize="mediumRectangle"
          adUnitID="ca-app-pub-2030002222097010/3151882628"
          testDeviceID=""
          didFailToReceiveAdWithError={this.bannerError} />
      </View>
    );
  }
}
// Display a banner
