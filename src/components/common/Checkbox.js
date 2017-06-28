import React from 'react';
import { View, Text, Switch } from 'react-native';

const Checkbox = ({label, onValueChange}) => {
    const { containerStyles, labelStyles } = styles;
    return (
        <View style={containerStyles}>
            <Text style={labelStyles}>{label}</Text>
            <Switch
                onValueChange={onValueChange} />
        </View>
    );
};

const styles={
    containerStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        height: 40,
        paddingRight: 20,
        paddingLeft: 25
    },
    labelStyles: {
        fontSize: 18,
        paddingBottom: 5
    }
};

export { Checkbox };