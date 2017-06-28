import React, { Component } from 'react';

import { userFormUpdate, createUser } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { View, Text } from 'react-native';
import { Card, CardSection, TextField, Spinner, Button, Checkbox } from './common';
import UserForm from './UserForm';

class SignupForm extends Component {
    onCreateUser() {
        const { email, password } = this.props;
        this.props.createUser({email, password});
    }
    onLoginPress() {
        Actions.pop();
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
                    <Text style={{alignSelf: 'center'}}>or</Text>
                    <Button onPress={this.onLoginPress}>Login</Button>
                </CardSection>
            );
        }
    }
    render() {
        return (
            <Card>
                <UserForm />
                <CardSection>
                    <Checkbox value={this.props.terms} label="Terms of Service" onValueChange={this.props.userFormUpdate.bind(this, 'terms')}/>
                </CardSection>
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
    const { error, terms, loading } = userForm;
    return { error, terms, loading };
};

export default connect(mapStateToProps, { 
    userFormUpdate, createUser
})(SignupForm);