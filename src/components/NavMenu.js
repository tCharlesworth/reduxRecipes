import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from './common';

const contextTypes = {
  drawer: React.PropTypes.object
};

class NavMenu extends Component {
  handlePress() {
    console.log('Press');
  }
  render() {
    return (
      <View styles={styles.containerStyles}>
        <Button onPress={this.handlePress.bind(this)}>New Recipe</Button>
        <Button onPress={this.handlePress.bind(this)}>Logout</Button>
      </View>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    borderWidth: 2,
    borderColor: 'red'
  }
};

NavMenu.contextTypes = contextTypes;

export default NavMenu;