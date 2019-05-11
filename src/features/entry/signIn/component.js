import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
  AsyncStorage 
} from 'react-native';

export class SignIn extends React.Component {
  
  state = {
    currentUsername: '',
    username: '',
    password: ''
  }

  signIn = () => {
    this.props.signIn({
      username: this.state.username,
      password: this.state.password
    })
  }
  
  render() {
    return (
      <View>
        <ScrollView>
          <Text>Login</Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Login"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <Text> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <Button onPress={this.signIn}
            title="Login"
            color="#00ff00"
            accessibilityLabel="Sign in"
          />
        </ScrollView>
      </View>
    )
  }
}