import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    recipeCreate,
    newRecipeUpdate
} from '../actions';

import { ScrollView, Text } from 'react-native';
import { Card, CardSection, TextField, ExpandingTextField, Button } from './common';

class RecipeForm extends Component {

    onRecipeCreate() {
        this.props.recipeCreate(this.props.name, this.props.ingredients, this.props.directions);
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <CardSection>
                        <TextField
                            label="Name"
                            placeholder="Apple Pie"
                            value={this.props.name}
                            onChangeText={(newText) => this.props.newRecipeUpdate('name', newText) } />
                    </CardSection>
                    <CardSection>
                        <ExpandingTextField
                            label="Ingredients"
                            placeholder="1 Cup Flour..."
                            multiline
                            value={this.props.ingredients}
                            onChangeText={ (newText) => this.props.newRecipeUpdate('ingredients', newText) } />
                    </CardSection>
                    <CardSection>
                        <ExpandingTextField
                            label="Directions"
                            placeholder="Start the oven"
                            multiline
                            value={this.props.directions}
                            onChangeText={ (newText) => this.props.newRecipeUpdate('directions', newText) } />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onRecipeCreate.bind(this)}>Save</Button>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ recipeForm }) => {
    const { name, ingredients, directions } = recipeForm;
    return { name, ingredients, directions };
}

export default connect(mapStateToProps, { newRecipeUpdate, recipeCreate })(RecipeForm);