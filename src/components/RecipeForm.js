import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newRecipeUpdate } from '../actions';

import { View } from 'react-native';
import { CardSection, TextField, ExpandingTextField } from './common';

class RecipeForm extends Component {
    render() {
        return (
            <View>
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
            </View>
        );
    }
}

const mapStateToProps = ({ recipeForm }) => {
    const { name, ingredients, directions } = recipeForm;

    return { name, ingredients, directions };
}

export default connect(mapStateToProps, { newRecipeUpdate })(RecipeForm);