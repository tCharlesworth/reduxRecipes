import React from 'react';
import { View, Text } from 'react-native';

const CardHeader = (props) => {
    return (
        <View style={[styles.itemStyle, props.style]}>
            <Text style={styles.textStyles}>{ props.children }</Text>
        </View>
    );
};

const styles = {
    itemStyle: {
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
    },
    textStyles: {
        fontSize: 30
    }
};

export { CardHeader };