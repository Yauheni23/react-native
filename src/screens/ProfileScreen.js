import React from 'react';
import {
  View, Text
} from 'react-native';


export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: false
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <Text> Lol </Text>
      </View>
    );
  }
}
