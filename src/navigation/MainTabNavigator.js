import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../features/home';
import Guides from '../features/guides';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: Home,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-home'
    />
  ),
};

const GuidesStack = createStackNavigator({
  Guides: Guides
});

GuidesStack.navigationOptions = {
  tabBarLabel: 'Guides',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-list-box'
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='md-options'
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  GuidesStack,
  SettingsStack,
});
