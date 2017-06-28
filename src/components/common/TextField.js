import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';

const TextField = ({ label, onChangeText, value, placeholder, secureTextEntry, autoCorrect, autoCapitalize, keyboardType }) => {
    const { containerStyle, inputStyle, labelStyle, aut } = styles;

    return (
        <View style={containerStyle} >
            <Text style={labelStyle}>{ label }</Text>
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={autoCorrect}
                style={ inputStyle } 
                onChangeText={ onChangeText }
                autoCapitalize={ autoCapitalize }
                keyboardType={ keyboardType }
                value={ value }/>
        </View>
    );
}

const styles = {
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 15,
        flex: 2
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 5
    }
};

export { TextField };