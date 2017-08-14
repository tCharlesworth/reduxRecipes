import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import { SubHeading, Card, CardArea, CardHeader } from './common';

class RecipeView extends Component {
    render() {
        return (
            <ScrollView>
                <Card style={styles.cardStyles}>
                    <CardHeader>
                        { this.props.recipe.name || "Recipe Name" }
                    </CardHeader>
                    <CardArea style={{borderBottomWidth: 0}}>
                        <SubHeading>Ingredients</SubHeading>
                        <Text>> {this.props.recipe.ingredients || "No Ingredients"}</Text>
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

const styles = {
    cardStyles: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    }
};

export default RecipeView;