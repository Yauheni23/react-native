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
          <Text style={{textAlign: "center", fontSize: 25}}>Login</Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Login"
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          />
          <Text style={{textAlign: "center", fontSize: 25}}> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
          <View style={{padding: 10}}>
            <Button onPress={this.signIn}
            style={{margin: 40}}
            title="Login"
            color="#00ff00"
            accessibilityLabel="Sign in"
          />
          </View>
          
        </ScrollView>
      </View>
    )
  }
}