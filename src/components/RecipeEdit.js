import React, { Component } from 'react';

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
                        <Button>Save</Button>
                        <Button>Cancel</Button>
                    </CardSection>
                </Card>
            </View>
        )
    }
}

export default RecipeEdit;