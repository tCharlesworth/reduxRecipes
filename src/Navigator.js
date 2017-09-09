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
import GroupCreate  from './components/GroupCreate';
import DrawerComponent from './components/DrawerComponent';

const RecipeStack = StackNavigator({
    RecipeList: {
        screen: RecipeList,
        navigationOptions: ({navigation}) => ({
            title: 'Recipes',
            drawerLabel: 'Recipes',
            headerLeft: <Button title="|||" onPress={()=>navigation.navigate('DrawerOpen')} />,
            headerRight: <Button title="+" onPress={()=>navigation.navigate('NewRecipe')} />
        })},
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
    },
    NewRecipe: { 
        screen: RecipeCreate,
        navigationOptions: {
            title: "New Recipe"
        }
    }
});

const GroupsStack = StackNavigator({
    GroupsHome: {
        screen: GroupsHome,
        navigationOptions: ({navigation}) => ({
            title: "Groups",
            headerRight: <Button title="Menu" onPress={()=>navigation.navigate('DrawerOpen')} />
        })
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
    Recipes: { 
        screen: RecipeStack, 
        drawerLabel: "Recipes" 
    },
    Groups: {
        screen: GroupsStack,
        drawerLabel: "Groups"
    },
    Logout: {
        screen: Logout,
        drawerLabel: "Logout"
    }
}, { // Drawer Configs
    contentComponent: DrawerComponent
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