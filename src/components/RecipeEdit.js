import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { updateRecipe } from '../actions';

import { View, Text } from 'react-native';
import { Card, CardSection, Button, Spinner } from './common';
import RecipeForm from './RecipeForm';

class RecipeEdit extends Component {
    onSavePress() {
        const { name, directions, ingredients, uid } = this.props;
        this.props.updateRecipe({name, directions, ingredients, uid});
    }
    renderButtons() {
        if(this.props.error && this.props.error != '') {
            return <CardSection><Text style={styles.errorTextStyles}>{this.props.error}</Text></CardSection>;
        } else if (this.props.loading) {
            return <CardSection><Spinner size="large" /></CardSection>;
        } else {
            return (
                <CardSection>
                    <Button onPress={this.onSavePress.bind(this)}>Save</Button>
                    <Button onPress={() => Actions.pop()}>Cancel</Button>
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

export default connect(mapStateToProps, { updateRecipe })(RecipeEdit);