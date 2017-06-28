import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableHighlight } from 'react-native';

import { CardSection } from './common';

class RecipeListItem extends Component {
    onPressHandler() {
        Actions.recipeView({recipe: this.props.recipe});
    }
    render() {
        const { name } = this.props.recipe;
        return (
            <CardSection>
                <TouchableHighlight style={{flex: 1}} underlayColor="#f5f5f5" onPress={this.onPressHandler.bind(this)}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyles}>{name}</Text>
                    </View>
                </TouchableHighlight>
            </CardSection>
        );
    }
};

const styles = {
    textStyles: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 1
    }
};

export default RecipeListItem;