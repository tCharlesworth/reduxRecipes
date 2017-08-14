import React, { Component }   from 'react';
import { connect }            from 'react-redux';
import { View, Text }         from 'react-native';
import { Spinner, CardSection }            from './common';
import { loginUserWithToken } from '../actions';


import firebase          from 'firebase';
import { AsyncStorage }  from 'react-native';
import { StorageConfig } from '../config';

class Splashscreen extends Component {
    componentDidMount() {
        this.props.loginUserWithToken();
    }
    render() {
        return (
            <View>
                <Text style={styles.titleStyles}>Just Cook</Text>
                <CardSection  style={{borderBottomWidth: 0}}>
                    <Spinner size="large" />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    titleStyles: {
        fontSize: 40,
        alignSelf: 'center',
        paddingBottom: 40,
        marginTop: 100
    }
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { loginUserWithToken })(Splashscreen);