import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import Entry from '../entry'
import Profile from '../profile/component'

  
export class Home extends React.Component {
    render() {
      const signIn = (this.props.isVisibleHome ? <Profile/> :<Entry/>);
        return (
        <View>
          <ScrollView>
            {signIn}
          </ScrollView>
        </View>
        )
    }
}