import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

export class SignUp extends React.Component {
  state = {
    name: '',
    username: '',
    password: '',
    mail: '',
  }

  signUp = () => {
    this.props.signUp({
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
      mail: this.state.mail,
    })
  }
  render() {
    return (
      <View>
        <ScrollView>
          <Text> Register </Text>
          <Text> Name </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Name"
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
          />
          <Text> Username </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Username"
            value={this.state.username}
            onChangeText={(username) => this.setState({username})}
          />
          <Text> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
          <Text> Mail </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'red' }}
            placeholder="Mail"
            value={this.state.mail}
            onChangeText={(mail) => this.setState({mail})}
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