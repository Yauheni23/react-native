import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();
    this.password = React.createRef();
    this.mail = React.createRef();
  }

  signUp = () => {
    this.props.signUp({
      login: this.login.current.value,
      password: this.password.current.value,
      mail: this.mail.current.value
    })
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Text> Register </Text>
          <Text> Username </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Login"
            ref={this.login}
          />
          <Text> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Password"
            ref={this.password}
          />
          <Text> Mail </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Password"
            ref={this.mail}
          />
          <Button onPress={this.signUp}
            title="Sign Up"
            color="#00ff00"
            accessibilityLabel="Sign Up"
          />
        </ScrollView>
      </View>
    )
  }
}