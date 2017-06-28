import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SubHeading, Card, CardArea, CardHeader } from './common';

class RecipeView extends Component {
    render() {
        return (
            <ScrollView>
                <Card>
                    <CardHeader>
                        { this.props.recipe.name || "Recipe Name" }
                    </CardHeader>
                    <CardArea>
                        <SubHeading>Ingredients</SubHeading>
                        <Text>{this.props.recipe.ingredients || "No Ingredients"}</Text>
                    </CardArea>
                    <CardArea>
                        <SubHeading>Directions</SubHeading>
                        <Text>{this.props.recipe.directions || "No Directions"}</Text>
                    </CardArea>
                </Card>
            </ScrollView>
        );
    }
};

export default RecipeView;