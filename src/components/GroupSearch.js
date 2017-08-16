import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { Button, TextField } from './common';
import { groupSearchUpdate } from '../actions';

class GroupSearch extends Component {
  onSearchPress() {
    console.log("START SEARCHING");
  }
  renderLoading() {
    return (
      <View>
        <Text>Searching</Text>
        <Spinner />
      </View>
    );
  }
  renderResults() {
    return (
      <ScrollView>
        <Card>
          <CardHeader>Group Name</CardHeader>
          <CardSection>
            <Text>Description</Text>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
  renderTerms() {
    return (
      <View>
        <Card>
          <CardSection>
            <TextField
              label="Name"
              placeholder="The Recipe Masters"
              value={this.props.searchTerms}
              returnKeyType="search"
              onSubmitEditing={this.onSearchPress.bind(this)}
              onChangeText={(newText) => this.props.groupSearchUpdate('searchTerms', newText)} />
          </CardSection>
          <CardSection>
            <Button onPress={this.onSearchPress.bind(this)}>Search</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
  render() {
    if(this.props.searching) {
      return this.renderLoading();
    } else if (this.props.results) {
      return this.renderResults();
    } else {
      return this.renderTerms();
    }
  }
}

const mapStateToProps = ({groups}) => {
  const { searching, results, searchTerms } = groups;
  return { searching, results, searchTerms };
};

export default connect(mapStateToProps, { groupSearchUpdate })(GroupSearch);