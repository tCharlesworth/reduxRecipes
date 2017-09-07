import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';

const DrawerComponent = (props)=> {
  return (
    <View style={styles.containerStyles}>
      <Text style={styles.textStyles}>Just Cook</Text>
      <DrawerItems {...props} />
    </View>
  );
};

const styles = {
  containerStyles: {
    flex: 1
  },
  textStyles: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  }
};

export default DrawerComponent;