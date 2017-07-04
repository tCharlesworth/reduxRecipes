import React, { Component }  from 'react';
import { AsyncStorage }      from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore,
         applyMiddleware }  from 'redux';
import ReduxThunk           from 'redux-thunk';
import firebase             from 'firebase';
import { Actions }          from 'react-native-router-flux';

import reducers             from './reducers';
import { FirebaseConfig,
         StorageConfig }    from './config';
import { loginUserWithToken } from './actions';

import Router from './Router';

firebase.initializeApp(FirebaseConfig);

class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // Auto route to login page
        Actions.login({authWithToken: true});
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