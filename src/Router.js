import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import RecipeCreate from './components/RecipeCreate';
import RecipeView   from './components/RecipeView';
import RecipeEdit   from './components/RecipeEdit';
import RecipeList   from './components/RecipeList';
import UserCreate   from './components/UserCreate';
import LoginForm    from './components/LoginForm';
import Splashscreen from './components/Splashscreen';
import NavMenu      from './components/NavMenu';

import firebase         from 'firebase';
import { AsyncStorage } from 'react-native';
import { StorageConfig } from './config';

const onSignOut = () => {
    firebase.auth().signOut();
    AsyncStorage.removeItem(StorageConfig.userDataKey);
    Actions.auth({type: 'reset'});
};

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="root">
                <Scene key="auth" initial>
                    <Scene key="loading" initial hideNavBar component={ Splashscreen } title="Splashscreen" />
                    <Scene key="login"  component={ LoginForm } title="Login" />
                    <Scene key="signup" component={ UserCreate } title="Signup" />
                </Scene>
                <Scene key="drawer" drawer contentComponent={NavMenu} hideNavBar>
                    <Scene key="main">
                        <Scene initial key="list" component={ RecipeList } title="Recipe List" />
                        <Scene key="recipeCreate" component={ RecipeCreate } title="New Recipe" />
                    </Scene>
                </Scene>
                <Scene 
                    key="recipeView" 
                    component={ RecipeView } 
                    title="Recipe View"
                    rightTitle="Edit"
                    onRight={ () => Actions.recipeEdit() } />
                <Scene
                    key="recipeEdit"
                    component={ RecipeEdit }
                    title="Edit Recipe" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;