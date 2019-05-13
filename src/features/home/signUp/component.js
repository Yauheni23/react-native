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
          <Text style={{ textAlign: "center", fontSize: 30, color: 'orange' }}> Register </Text>
          <Text style={{ textAlign: "center", fontSize: 25 }}> Name </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Name"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
          />
          <Text style={{ textAlign: "center", fontSize: 25 }}> Username </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Username"
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Text style={{ textAlign: "center", fontSize: 25 }}> Password </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          <Text style={{ textAlign: "center", fontSize: 25 }}> Mail </Text>
          <TextInput style={{ height: 40, borderWidth: 1, borderColor: 'gray', paddingLeft: 5 }}
            placeholder="Mail"
            value={this.state.mail}
            onChangeText={(mail) => this.setState({ mail })}
          />
          <View style={{ padding: 10 }}>
            <Button onPress={this.signUp}
              title="Sign Up"
              color="#00ff00"
              accessibilityLabel="Sign Up"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}