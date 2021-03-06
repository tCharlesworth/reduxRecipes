import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Actions } from 'react-native-router-flux';
import { View, Text, TouchableHighlight } from 'react-native';

import { setCurrentRecipe } from '../actions';

import { CardSection } from './common';

class RecipeListItem extends Component {
    onPressHandler() {
        //***************XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*************** */
        console.log("PARAMATERS!: ", this.props)
        this.props.setCurrentRecipe(this.props.recipe);
    }
    render() {
        const { name } = this.props.recipe;
        return (
            <CardSection>
                <TouchableHighlight style={styles.containerStyles} underlayColor="#f5f5f5" onPress={this.onPressHandler.bind(this)}>
                    <View style={{flex: 1}}>
                        <Text style={styles.textStyles}>{name}</Text>
                    </View>
                </TouchableHighlight>
            </CardSection>
        );
    }
};

const styles = {
    containerStyles: {
        padding: 20,
        flex: 1
    },
    textStyles: {
        fontSize: 20,
        paddingLeft: 10,
        flex: 1
    }
};

const mapStateToProps = ({ nav }) => {
    return { nav };
}

export default connect(mapStateToProps, { setCurrentRecipe })(RecipeListItem);