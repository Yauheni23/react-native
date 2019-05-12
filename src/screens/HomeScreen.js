import React from 'react';
import { ScrollView } from 'react-native';
import { Main } from '../features/entry/main/component'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <ScrollView>
        <Home />
      </ScrollView>
    );
  }
}
