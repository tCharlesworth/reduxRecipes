import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import RecipeForm from './components/RecipeForm';
import RecipeView from './components/RecipeView';
import RecipeList from './components/RecipeList';
import UserCreate from './components/UserCreate';
import LoginForm  from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="auth" initial>
                <Scene key="login"  component={ LoginForm } title="Login" />
                <Scene key="signup" component={ UserCreate } title="Signup" />
            </Scene>
            <Scene key="main">
                <Scene 
                    key="list" 
                    component={ RecipeList } 
                    title="Recipe List"
                    rightTitle="New"
                    onRight={ () => Actions.recipeForm() } />
                <Scene key="recipeForm" component={ RecipeForm } title="Recipe Form" />
                <Scene 
                    key="recipeView" 
                    component={ RecipeView } 
                    title="Recipe View" />
            </Scene>
        </Router>
    );
};

export default RouterComponent;