import React, { Component } from 'react';
import { connect } from 'react-redux';
import { groupFormUpdate } from '../actions';
import { Card, CardSection, TextField, Checkbox, Button } from './common';
import { View, Text } from 'react-native';

class GroupCreate extends Component {
  renderPassword() {
    if(this.props.isPrivate) {
      return (
        <CardSection>
          <TextField
            label="Password"
            placeholder="********"
            value={this.props.password}
            onChangeText={(newText) => this.props.groupFormUpdate('password', newText)}
            />
        </CardSection>
      );
    }
  }
  renderError() {
    if(this.props.error) {
      return (
        <CardSection>
          <Text>{ this.props.error }</Text>
        </CardSection>
      );
    }
  }
  renderButton() {
    if(this.props.loading) {
      return <CardSection><Spinner size="large" /></CardSection>;
    } else {
      return (
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      );
    }
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <TextField
              label="Name"
              placeholder="Cooks Anonymous"
              value={this.props.name}
              onChangeText={(newText) => this.props.groupFormUpdate('name', newText)}
               />
          </CardSection>
          <CardSection>
            <Checkbox
              label="Private?"
              value={this.props.isPrivate}
              onValueChange={(value) => this.props.groupFormUpdate('isPrivate', value)} />
          </CardSection>
          {this.renderPassword()}
          {this.renderError()}
          {this.renderButton()}
        </Card>
      </View>
    );
  }
}

const mapStateToProps = ({ groupForm }) => {
  const { name, isPrivate, password, loading, error } = groupForm;
  return { name, isPrivate, password, loading, error };
};

export default connect(mapStateToProps, { groupFormUpdate })(GroupCreate);