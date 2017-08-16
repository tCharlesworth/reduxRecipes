import React, { Component } from 'react';

import { userFormUpdate, createUser } from '../actions';
import { connect } from 'react-redux';

import { View, Text, Keyboard } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Card, CardSection, TextField, Spinner, Button, Checkbox } from './common';
import UserForm from './UserForm';

class SignupForm extends Component {
    onCreateUser() {
        const { email, password, username } = this.props;
        Keyboard.dismiss();
        this.props.createUser({email, password, username});
    }
    renderError() {
        if(this.props.error != '') {
            return (
                <CardSection>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </CardSection>
            );
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <CardSection><Spinner size="large" /></CardSection>;
        } else {
            return (
                <CardSection>
                    <Button onPress={this.onCreateUser.bind(this)}>Signup</Button>
                </CardSection>
            );
        }
    }
    render() {
        return (
            <Card>
                <UserForm />
                {/* <CardSection>
                    <Checkbox value={this.props.terms} label="Terms of Service" onValueChange={this.props.userFormUpdate.bind(this, 'terms')}/>
                </CardSection> */}
                { this.renderError() }
                { this.renderButton() }
            </Card>
        )
    }
}

const styles = {
    errorText: {
        fontSize: 18,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = ({ userForm }) => {
    const { error, terms, loading, email, username, password } = userForm;
    console.log('MAPPING: ', userForm);
    return { error, terms, loading, email, username, password };
};

export default connect(mapStateToProps, { 
    userFormUpdate, createUser
})(SignupForm);