import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import RecipeCreate from './components/RecipeCreate';
import RecipeView   from './components/RecipeView';
import RecipeEdit   from './components/RecipeEdit';
import RecipeList   from './components/RecipeList';
import UserCreate   from './components/UserCreate';
import LoginForm    from './components/LoginForm';
import Splashscreen from './components/Splashscreen';

// import firebase         from 'firebase';
// import { AsyncStorage } from 'react-native';
// import { StorageConfig } from './config';

// const onSignOut = () => {
//     firebase.auth().signOut();
//     AsyncStorage.removeItem(StorageConfig.userDataKey);
//     //***************XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*************** */
// };

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

const Navigator = DrawerNavigator({
    Recipes: { screen: RecipeStack, drawerLabel: "Recipes" },
    NewRecipe: { screen: RecipeCreate, drawerLabel: "New Recipe" }
}); 

export default Navigator;