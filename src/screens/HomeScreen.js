import React from 'react';
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ScrollView} from 'react-native';

import Home from '../features/home';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Entry!',
  };
  
  render() {
    return (
      <Provider store={store}>
        <ScrollView>
          <Home/>
        </ScrollView>
      </Provider>
    );
  }
}
