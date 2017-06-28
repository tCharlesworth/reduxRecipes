import React, { Component } from 'react';
import { View, Text }       from 'react-native';
import { Provider }         from 'react-redux';
import { createStore,
         applyMiddleware }  from 'redux';
import ReduxThunk           from 'redux-thunk';
import firebase             from 'firebase';

import reducers             from './reducers';
import { FirebaseConfig }   from './config';

import Router from './Router';

class App extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(FirebaseConfig);
    }
    render() {
        reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ reduxStore }>
                <Router />
            </Provider>
        );
    }
}

export default App;