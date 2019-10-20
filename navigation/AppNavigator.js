import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import {tabNavigator, AuthStack} from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: tabNavigator,
    Auth: AuthStack,
  })
);
