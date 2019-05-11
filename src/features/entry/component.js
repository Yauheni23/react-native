import React from 'react';
import {
  Button,
  View,
} from 'react-native';
import { SignIn } from './signIn/component';
import { SignUp } from './signUp/component';


export class Entry extends React.Component {
  state = {
    isRegister: false
  }

  swapRegisterAndLogin = () => {
    this.setState({
      isRegister: !this.state.isRegister
    })
  }

  render() {
    return (
      <View>
          {(this.state.isRegister ? <SignUp signUp={this.props.signUp}/> : <SignIn signIn={this.props.signIn}/>)}
          <Button onPress={this.swapRegisterAndLogin}
            title={!this.state.isRegister ? "Sign Up" : "Sign In"}
            color="#0000ff"
            accessibilityLabel="Entry"
          />
      </View>
    )
  }
}