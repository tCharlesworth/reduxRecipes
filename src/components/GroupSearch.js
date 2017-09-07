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
  renderGroupCard(group) {
    return (
      <Card>
        {/* Show  a locked Icon somewhere for private groups */}
        <CardHeader>Group name</CardHeader>
        <CardSection>
          <Button>Join</Button>
        </CardSection>
      </Card>
    );
  }
  renderError() {
    if(this.props.searchError) {
      return (
        <View>
          <CardSection>
            <Text style={styles.errorTextStyles}>{this.props.searchError}</Text>
          </CardSection>
        </View>
      );
    }
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
        {this.props.groups.map((group, idx) => {this.renderGroupCard(group)})}
      </ScrollView>
    );
  }
  renderTerms() {
    return (
      <View>
        <Card>
          {this.renderError()}
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
    if (this.props.searching) {
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

const styles = {
  errorTextStyles: {
    color: 'red',
    textAlign: 'center'
  }
};

export default connect(mapStateToProps, { groupSearchUpdate, searchAllGroups })(GroupSearch);