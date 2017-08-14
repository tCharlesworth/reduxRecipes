import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

class LargeTextField extends Component {
  onChangeHandler(event) {
    const { text } = event.nativeEvent;
    this.props.onChangeText ? this.props.onChangeText(text) : undefined;
  }
  renderLabel(label) {
    if(label) {
      return (
        <Text style={styles.labelStyles}>{label}</Text>
      );
    }
  }
  render() {
    const { placeholder, autoCorrect, value, label, multiline, returnKeyType } = this.props;
    return (
      <View style={styles.containerStyles}>
        {this.renderLabel(label)}
        <TextInput
            multiline={multiline}
            returnKeyType={returnKeyType}
            textAlignVertical='top'
            numberOfLines={6}
            style={styles.inputStyles}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            onChange={this.onChangeHandler.bind(this)}
            value={value}
          />
      </View>
    );
  }
};

const styles = {
  containerStyles: {
    flex: 1
  },
  inputStyles: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    borderWidth: 1,
    borderColor: '#d6d7da'
  },
  labelStyles: {
    fontSize: 18,
    alignSelf: 'center',
    height: 40
  }
}

export { LargeTextField };