import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const TextButton = (props) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <Text style={props.styles}>{props.children}</Text>
    </TouchableHighlight>
  );
};

export { TextButton };