import React, { Component }  from 'react';
import { AsyncStorage }      from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore,
         applyMiddleware }  from 'redux';
import ReduxThunk           from 'redux-thunk';
import firebase             from 'firebase';
import { addNavigationHelpers } from 'react-navigation';

import reducers  from './reducers';
import Navigator from './Navigator';

import { FirebaseConfig } from './config';

firebase.initializeApp(FirebaseConfig);



const Router = ({dispatch, nav}) => (
    <Navigator
        navigation={addNavigationHelpers({
            dispatch,
            state: nav
        })} />
);

const mapStateToProps = (state) => {
    return { nav: state.nav}
};

const RouterWithNav = connect(mapStateToProps)(Router);





class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        reduxStore = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={ reduxStore }>
                <RouterWithNav />
            </Provider>
        );
    }
}

export default App;