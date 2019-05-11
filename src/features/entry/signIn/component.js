import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
  }

  signIn = () => {
    this.props.signIn({
      login: this.login.current.value,
      password: this.password.current.value
    })
  }
  
  render() {
    return (
      <View>
        <ScrollView>
          <Text> Login </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Login"
            ref={this.login}
          />
          <Text> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Password"
            ref={this.password}
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