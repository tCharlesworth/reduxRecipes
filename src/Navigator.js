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
import GroupsHome   from './components/GroupsHome';
import GroupSearch  from './components/GroupSearch';
import GroupCreate  from './components/GroupCreate.js';

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
                title: `${navigation.state.params.name}`,
                headerRight: <Button title="Edit" onPress={()=>navigation.navigate('RecipeEdit')} />
            })
        },
    RecipeEdit: {
        screen: RecipeEdit,
        navigationOptions: {
            title: "Edit Recipe"
        }
    }
});

const GroupsStack = StackNavigator({
    GroupsHome: {
        screen: GroupsHome,
        navigationOptions: {
            title: "Groups"
        }
    },
    GroupSearch: {
        screen: GroupSearch,
        navigationOptions: {
            title: "Find a Group"
        }
    },
    GroupCreate: {
        screen: GroupCreate,
        navigationOptions: {
            title: "Create A Group"
        }
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
    Groups: {
        screen: GroupsStack,
        drawerLabel: "Groups"
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