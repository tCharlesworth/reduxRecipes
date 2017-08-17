import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateRecipe, deleteRecipe } from '../actions';

import { View, Text, Alert } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {
    onSavePress() {
        const { name, directions, ingredients, uid } = this.props;
        this.props.updateRecipe({name, directions, ingredients, uid});
    }
    onDeletePress() {
        Alert.alert(
            'Delete Recipe', 
            `Are you sure you want to delete ${this.props.name || 'unknown'}?`,
            [
                {text: 'Cancel', onPress: () => {}},
                {text: 'Delete', onPress: () => { this.props.deleteRecipe(this.props.uid); }}
            ]);
    }
    renderButtons() {
        if(this.props.error && this.props.error != '') {
            return <CardSection><Text style={styles.errorTextStyles}>{this.props.error}</Text></CardSection>;
        } else if (this.props.loading) {
            return <CardSection><Spinner size="large" /></CardSection>;
        } else {
            return (
                <CardSection>
                    <Button onPress={this.onDeletePress.bind(this)}>Delete</Button>
                    <Button onPress={this.onSavePress.bind(this)}>Save</Button>
                </CardSection>
            );
        }
    }
    render() {
        return (
            <View>
                <Card>
                    <RecipeForm />
                    {this.renderButtons()}
                </Card>
            </View>
        );
    }
}

const styles = {
    errorTextStyles: {
        color: 'red'
    }
};

const mapStateToProps = ({recipeForm, recipes}) => {
    const { uid } = recipes.currentRecipe;
    const { name, directions, ingredients, error, loading } = recipeForm;

    return { name, directions, ingredients, uid };
};

export default connect(mapStateToProps, { updateRecipe, deleteRecipe })(RecipeEdit);