import React from 'react';
import { ScrollView, View } from 'react-native';
import { Entry } from './entry/component'
import { Profile } from './profile/component'

export class Home extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View>
        <ScrollView>
          {this.props.isProfile
            ? <Profile exit={this.props.exit} />
            : <Entry signIn={this.props.signIn}
              signUp={this.props.signUp}
              isLoading={this.props.isLoading}
              error={this.props.error} />
          }
        </ScrollView>
      </View>
    )
  }
}