import React from 'react';
import {
  ScrollView,
  View,
  Text,
  AsyncStorage
} from 'react-native';
import axios from 'axios'

export class Profile extends React.Component {
  componentDidMount() {
    AsyncStorage.getItem('token').then((result) => {
      console.log(1)
      axios.defaults.headers.common['x-access-token'] = result;
      console.log(2)
      axios.get('http://172.18.156.188:8080/api/test/user')
      .then(function (response) {
        console.log(3)
        console.log(response.data.user)
      })
      .catch(function (error) {
        console.log(error);
      })
    })
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Text> Profile </Text>
        </ScrollView>
      </View>
    )
  }
}