import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goToPage } from '../actions';
import { TextButton } from './common';
import { View, Text, TouchableHighlight } from 'react-native';

class GroupsHome extends Component {
  onPressSearch() {
    console.log('CLICK SEARCH', this.props.navigation);
    this.props.goToPage('GroupSearch');
  }
  renderNoGroups() {
    return (
      <View style={{alignItems: 'center', paddingTop: 60}}>
        <Text style={{fontSize: 20}}> You haven't joined any groups yet!</Text>
        <View style={{flexDirection: 'row'}}>
          <TextButton onPress={this.onPressSearch.bind(this)} styles={{fontSize: 20, color: 'blue'}}>Search</TextButton><Text style={{fontSize: 20}}> for a group or </Text>
          <TextButton styles={{fontSize: 20, color: 'blue'}}>create</TextButton><Text style={{fontSize: 20}}> one!</Text>
        </View>
      </View>
    )
  }
  renderGroups() {
    return <Text>No Groups</Text>;
  }
  render() {
    return (
      <View>
        { this.props.usersGroups && this.props.usersGroups.length > 0 ? this.renderGroups() : this.renderNoGroups() }
      </View>
    );
  }
}

const mapStateToProps = ({ groups, navigation }) => {
  const { usersGroups } = groups;
  return { usersGroups, navigation };
};

export default connect(mapStateToProps, { goToPage })(GroupsHome);