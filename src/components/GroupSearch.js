import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import { Button, TextField, Card, CardSection, Spinner } from './common';
import { groupSearchUpdate, searchAllGroups } from '../actions';

class GroupSearch extends Component {
  onSearchPress() {
    console.log("START SEARCHING", this.props.searchTerms);
    this.props.searchAllGroups(this.props.searchTerms)
  }
  renderError() {
    return (
      <View>
        <Text>{this.props.error}</Text>
      </View>
    );
  }
  renderLoading() {
    return (
      <View>
          <Text style={{alignSelf: 'center', padding: 10, margin: 10}}>Searching</Text>
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
    if(this.props.searchError) {
      return (<View>
        {this.renderError()}
        {this.renderTerms()}
      </View>);
    } else if (this.props.searching) {
      return this.renderLoading();
    } else if (this.props.results) {
      return this.renderResults();
    } else {
      return this.renderTerms();
    }
  }
}

const mapStateToProps = ({groups}) => {
  const { searching, results, searchTerms, searchError } = groups;
  return { searching, results, searchTerms, searchError };
};

export default connect(mapStateToProps, { groupSearchUpdate, searchAllGroups })(GroupSearch);