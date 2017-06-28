import React from 'react';

import { View, Text } from 'react-native';

const SubHeading = (props) => {
    return (
        <View>
            <Text style={styles.headingTextStyles}>{props.children}</Text>
        </View>
    );
};

const styles= {
    headingTextStyles: {
        fontSize: 20
    }
};

export { SubHeading };