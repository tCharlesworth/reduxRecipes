import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import { Button } from 'react-native';

import RecipeCreate from './components/RecipeCreate';
import RecipeView   from './components/RecipeView';
import RecipeEdit   from './components/RecipeEdit';
import RecipeList   from './components/RecipeList';
import UserCreate   from './components/UserCreate';
import LoginForm    from './components/LoginForm';
import Logout       from './components/Logout';
import Splashscreen from './components/Splashscreen';

const RecipeStack = StackNavigator({
    RecipeList: {
        screen: RecipeList,
        navigationOptions: {
            title: 'Recipes',
            drawerLabel: 'Recipes'
        }},
    RecipeDetail: {
        screen: RecipeView,
        navigationOptions: ({navigation}) => ({
                title: `${navigation.state.params.name}`
            })
        }
});

const MainNavigator = DrawerNavigator({
    Recipes: { screen: 
        RecipeStack, 
        drawerLabel: "Recipes" 
    },
    NewRecipe: { 
        screen: RecipeCreate, 
        drawerLabel: "New Recipe" 
    },
    Logout: {
        screen: Logout,
        drawerLabel: "Logout"
    }
});

const AuthNavigator = StackNavigator({
    Login: {
        screen: LoginForm,
        navigationOptions: ({navigation}) => ({
            title: 'Login',
            headerRight: <Button title="Signup" onPress={() => {navigation.navigate('Signup')}} />
        })
    },
    Signup: {
        screen: UserCreate,
        navigationOptions: {
            title: 'Signup'
        }
    }
})

const RootNavigator = StackNavigator({
    Splashscreen: { screen: Splashscreen },
    AuthScreen: { screen: AuthNavigator },
    MainScreen: { screen: MainNavigator }
}, { headerMode: 'none' });

export default RootNavigator;