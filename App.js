import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './src/reducers';
//import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBQimLSSNkT0cRthnOPb0pWOlhLN8jNEtw',
      authDomain: 'liftu-304f1.firebaseapp.com',
      databaseURL: 'https://liftu-304f1.firebaseio.com',
      projectId: 'liftu-304f1',
      storageBucket: 'liftu-304f1.appspot.com',
      messagingSenderId: '627985504665'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
