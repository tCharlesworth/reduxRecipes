import React, { Component } from 'react';
import { connect } from 'react-redux';

import { recipeCreate, clearRecipeForm } from '../actions';

import { ScrollView, Text, Keyboard } from 'react-native';
import { Card, Button, CardSection, Spinner } from './common';
import RecipeForm from './RecipeForm';

class RecipeCreate extends Component {
    componentWillMount() {
        this.props.clearRecipeForm();
    }

    onRecipeCreate() {
        Keyboard.dismiss();
        this.props.recipeCreate(this.props.name, this.props.ingredients, this.props.directions);
    }

    renderError() {
        if(this.props.error || this.props.error != '') {
            return (
                <CardSection>
                    <Text style={styles.errorTextStyles}>{this.props.error}</Text>
                </CardSection>
            )
        }
    }

    renderButtons() {
        if(this.props.loading) {
            return (
                <CardSection>
                    <Spinner size="large" />
                </CardSection>
            );
        } else {
            return (
                <CardSection>
                    <Button onPress={this.onRecipeCreate.bind(this)}>Save</Button>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <ScrollView>
                <Card>
                    <RecipeForm />
                    {this.renderError()}
                    {this.renderButtons()}
                </Card>
            </ScrollView>
        );
    }
}

const styles = {
    errorTextStyles: {
        color: 'red'
    }
};

const mapStateToProps = ({ recipeForm }) => {
    const { name, ingredients, directions, error, loading } = recipeForm;
    return { name, ingredients, directions, error, loading };
}

export default connect(mapStateToProps, { recipeCreate, clearRecipeForm })(RecipeCreate);