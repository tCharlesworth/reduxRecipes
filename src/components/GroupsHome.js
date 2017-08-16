import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextButton } from './common';
import { View, Text } from 'react-native';

class GroupsHome extends Component {
  renderNoGroups() {
    return (
      <View>
        <Text> You haven't joined any groups yet!</Text>
        <Text><TextButton>Search</TextButton> for a group or <TextButton>create</TextButton> one!</Text>
      </View>
    )
  }
  render() {
    return (
      <View>
        { this.props.usersGroups ? this.renderGroups() : this.renderNoGroups() }
      </View>
    );
  }
}

const mapStateToProps = ({ groups }) => {
  const { usersGroups } = groups;
  return { usersGroups };
};

export default connect(mapStateToProps)(GroupsHome);