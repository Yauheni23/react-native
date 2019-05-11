import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SignIn } from './signIn/component';
import { SignUp } from './signUp/component';


export class Entry extends React.Component {
  state = {
    showedSignUp: false
  }

  swapRegisterAndLogin = () => {
    this.setState({
      showedSignUp: !this.state.showedSignUp
    })
  }

  render() {
    return (
      <View style={styles.container}>
        { !this.props.isLoading 
          ? <View>
              {this.state.showedSignUp ? <SignUp signUp={this.props.signUp}/> : <SignIn signIn={this.props.signIn}/>}
              <Button onPress={this.swapRegisterAndLogin}
                title={!this.state.showedSignUp ? "Sign Up" : "Sign In"}
                color="#0000ff"
                accessibilityLabel="Entry"
              />
              <Text style={styles.red}>{this.props.error}</Text>
            </View>
            :
            <ActivityIndicator size="large" color="#00ff00"/>
        }
        <Text>{this.props.token ? this.props.token.accessToken : null}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  red: {
    color: '#ff0000'
  }
})