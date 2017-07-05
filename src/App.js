import React, { Component }  from 'react';
import { AsyncStorage }      from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore,
         applyMiddleware }  from 'redux';
import ReduxThunk           from 'redux-thunk';
import firebase             from 'firebase';
import { Actions }          from 'react-native-router-flux';

import reducers             from './reducers';

import Router from './Router';
import { FirebaseConfig } from './config';

firebase.initializeApp(FirebaseConfig);

class App extends Component {
    constructor(props) {
        super(props);
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