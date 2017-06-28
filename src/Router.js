import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import RecipeCreate from './components/RecipeCreate';
import RecipeView from './components/RecipeView';
import RecipeEdit from './components/RecipeEdit';
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
                    onRight={ () => Actions.recipeCreate() } />
                <Scene key="recipeCreate" component={ RecipeCreate } title="New Recipe" />
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