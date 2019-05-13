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
      <View >
        <ScrollView>
          <Text style={{fontSize: 24, textAlign: "center"}}> Profile </Text>
          <Text style={{fontSize: 20}}> Name: {this.state.name} </Text>
          <Text style={{fontSize: 20}}> Username: {this.state.username} </Text>
          <Text style={{fontSize: 20}}> Email: {this.state.email} </Text>
          <Text style={{fontSize: 20}}> Role: {this.state.role} </Text>
          <Text style={{fontSize: 20}}> Count guides: {this.state.countGuides} </Text>
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