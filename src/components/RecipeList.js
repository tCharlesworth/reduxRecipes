import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';

import { recipesFetch } from '../actions';
import RecipeListItem from './RecipeListItem';

class RecipeList extends Component {
    componentWillMount() {
        this.props.recipesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    
    createDataSource({ recipes }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => { return r1 != r2; }
        });

        this.dataSource = ds.cloneWithRows(recipes);
    }

    renderRow(recipe) {
        return (
            <RecipeListItem recipe={recipe} />
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = ({recipes}) => {
    const recipeArray = _.map(recipes.recipes, (val, uid) => {
        return {...val, uid};
    });

    return { recipes: recipeArray };
}

export default connect(mapStateToProps, { recipesFetch })(RecipeList);