import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const DEFAULT_HEIGHT = 80;

class ExpandingTextField extends Component{
    constructor(props) {
        super(props);
        this.state = {
            height: DEFAULT_HEIGHT
        };
    }

    onChangeHandler (event) {
        // Adjust Height
        const { contentSize, text } = event.nativeEvent;
        this.setState({
            height: contentSize.height < DEFAULT_HEIGHT ? DEFAULT_HEIGHT : contentSize.height
        });
        // Call on change text from props if it exists
        this.props.onChangeText ? this.props.onChangeText(text) : undefined;
    }

    render() {
        const { label, value, placeholder, secureTextEntry, autoCorrect } = this.props;
        const { containerStyle, inputStyle, labelStyle, aut } = styles;

        return (
            <View style={[containerStyle, { height: this.state.height + 30 }]} >
                <Text style={labelStyle}>{ label }</Text>
                <TextInput
                    multiline
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={autoCorrect}
                    style={ {...inputStyle, ...{ height: this.state.height }} } 
                    onChange={ this.onChangeHandler.bind(this) }
                    value={ value }/>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        height: 40
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
        minWidth: 250
    }
};

export { ExpandingTextField };