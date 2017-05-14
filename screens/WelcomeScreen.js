import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome To Jobs App', color: '#03A9F4' },
  { text: 'Set Your Location, then swipe away', color: '#009688'}
]

class WelcomeScreen extends Component {
  render() {
    return (
      <Slides data={SLIDE_DATA} />
    );
  }
}
export default WelcomeScreen;
