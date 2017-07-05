import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { View, Text }         from 'react-native';
import { loginUserWithToken } from '../actions';


import firebase          from 'firebase';
import { AsyncStorage }  from 'react-native';
import { StorageConfig } from './config';

class Splashscreen extends Component {
    componentDidMount() {
        this.props.loginUserWithToken();
    }
    render() {
        return (
            <View>
                <Text style={styles.titleStyles}>Just Cook</Text>
                <Spinner size="large" />
                <Text style={styles.textStyles}>Loading...</Text>
            </View>
        );
    }
}

const styles = {
    titleStyles: {
        fontSize: 20,
        alignSelf: 'center'
    },
    textStyles: {
        fontSize: 10,
        alignSelf: 'center'
    }
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { loginUserWithToken })(Splashscreen);