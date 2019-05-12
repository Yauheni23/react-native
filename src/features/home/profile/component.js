import React from 'react';
import {
  ScrollView,
  View,
  Text,
  AsyncStorage,
  Button
} from 'react-native';
import axios from 'axios'
import { constants } from '../../../constants'

export class Profile extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    role: '',
    countGuides: ''
  }

  
  componentDidMount() {
    AsyncStorage.getItem('token').then((result) => {
      axios.defaults.headers.common['x-access-token'] = result;
      axios.get(`http://${constants.serverAddress}:8080/api/test/user`)
        .then((response) => {
          this.setState({
            username: response.data.user.username,
            name: response.data.user.name,
            email: response.data.user.email,
            role: response.data.user.roles[0].name,
            countGuides: response.data.user.Guides.length
          })
        })
        .catch((error) => {
          console.log(error);
        })
    })
  }

  exit = () => {
    this.props.exit()
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Text> Profile </Text>
          <Text> Name: {this.state.name} </Text>
          <Text> Username: {this.state.username} </Text>
          <Text> Email: {this.state.email} </Text>
          <Text> Role: {this.state.role} </Text>
          <Text> Count guides: {this.state.countGuides} </Text>
          <Button onPress={this.exit}
            title="Exit"
            color="#ff0000"
            accessibilityLabel="Exit"
          />
        </ScrollView>
      </View>
    )
  }
}