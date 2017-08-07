import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import NoteCreate from './screens/NoteCreate';
import Exercise from './screens/Exercise';
import About from './screens/About';

class Router extends Component {
  render() {
    const { user } = this.props;
    const SignedOut = StackNavigator({
      SignUp: {
        screen: Login,
        navigationOptions: {
          title: 'Login'
        }
      }
    });

    const SignedIn = TabNavigator({
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

    const router = (screen) => {
      return StackNavigator({
          SignedOut: {
            screen,
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
    const Route = user ? router(SignedIn) : router(SignedOut);
    return <Route />;
  }
}

const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  console.log('user ', user);
  return { user };
};

export default connect(mapStateToProps, {})(Router);

