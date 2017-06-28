import React, { Component } from 'react';
import { connect } from 'react-redux';

import { recipeCreate } from '../actions';

import { ScrollView } from 'react-native';
import { Card, Button, CardSection } from './common';
import RecipeForm from './RecipeForm';

class RecipeCreate extends Component {

    onRecipeCreate() {
        this.props.recipeCreate(this.props.name, this.props.ingredients, this.props.directions);
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <RecipeForm />
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

export default connect(mapStateToProps, { recipeCreate })(RecipeCreate);