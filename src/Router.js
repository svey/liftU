import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './screens/Login';
import NoteCreate from './screens/NoteCreate';

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
    screen: NoteCreate,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarPosition: 'bottom',
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name='home' size={30} color={tintColor} />
      // )
    }
  },
  Profile: {
    screen: NoteCreate,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarPosition: 'bottom',
      // tabBarIcon: ({ tintColor }) => (
      //   <FontAwesome name='user' size={30} color={tintColor} />
      // )
    }
  }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
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
