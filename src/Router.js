import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import NoteCreate from './screens/NoteCreate';
import Exercise from './screens/Exercise';
import About from './screens/About';

const SignedOut = StackNavigator({
  SignUp: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  }
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Exercise,
    navigationOptions: {
      tabBarLabel: 'Routine',
      tabBarPosition: 'bottom',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='fitness-center' size={20} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: NoteCreate,
    navigationOptions: {
      tabBarLabel: 'Progress',
      tabBarPosition: 'bottom',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='person' size={20} color={tintColor} />
      )
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      tabBarLabel: 'About',
      tabBarPosition: 'bottom',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='info-outline' size={20} color={tintColor} />
      )
    }
  }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      //showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: 'black'
      }
    }
});

const router = () => {
  return StackNavigator({
      SignedOut: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false,
        }
      }
    },
    {
      //headerMode: 'none',
      mode: 'modal',
      initialRouteName: 'SignedOut'
    }
  );
};

export default router;
