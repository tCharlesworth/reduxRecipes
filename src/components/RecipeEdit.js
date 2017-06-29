import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { updateRecipe } from '../actions';

import { View } from 'react-native';
import { Card, CardSection, Button } from './common';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {
    render() {
        return (
            <View>
                <Card>
                    <RecipeForm />
                    <CardSection>
                        <Button onPress={() => Actions.pop()}>Save</Button>
                        <Button onPress={() => Actions.pop()}>Cancel</Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default connect(null, { updateRecipe })(RecipeEdit);