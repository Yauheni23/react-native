import React from 'react';
import {
  ScrollView,
  AsyncStorage,
  View,
} from 'react-native';
import Entry from '../entry'
import {Profile} from '../profile/component'


export class Home extends React.Component {
  state = {
    currentUsername: ''
  }
  
  componentDidMount() {
    AsyncStorage.getItem('username').then((result) => {
      this.setState({
        currentUsername: result
      })
    })
  }

  render() {
    const signIn = this.props.token ? <Profile /> : <Entry />;
    return (
      <View>
        <ScrollView>
          {signIn}
        </ScrollView>
      </View>
    )
  }
}