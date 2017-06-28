import React from 'react';
import { View } from 'react-native';

const CardArea = (props) => {
    return (
        <View style={[styles.itemStyle, props.style]}>
            { props.children }
        </View>
    );
};

const styles = {
    itemStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardArea };