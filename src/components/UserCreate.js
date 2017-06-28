import React, { Component } from 'react';

import { createEmailChanged, createPasswordChanged, createUser } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { View, Text } from 'react-native';
import { Card, CardSection, TextField, Spinner, Button, Checkbox } from './common';

class SignupForm extends Component {
    renderError() {
        if(this.props.error != '') {
            return (
                <CardSection>
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </CardSection>
            );
        }
    }
    onCreateUser() {
        const { email, password } = this.props;
        this.props.createUser({email, password});
    }
    onPasswordChanged(newText) {
        this.props.createPasswordChanged(newText);
    }
    onEmailChanged(newText) {
        this.props.createEmailChanged(newText);
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        } else {
            return (
                <CardSection>
                    <Button onPress={this.onCreateUser.bind(this)}>Signup</Button>
                    <Text style={{alignSelf: 'center'}}>or</Text>
                    <Button onPress={this.onLoginPress}> Login </Button>
                </CardSection>
            )
        }
    }
    onLoginPress() {
        Actions.pop();
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <TextField 
                        label="Email"
                        placeholder="test@gmail.com"
                        onChangeText={this.onEmailChanged.bind(this)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autocorrect={false} />
                </CardSection>
                <CardSection>
                    <TextField
                        label="Password"
                        placeholder="********"
                        onChangeText={this.onPasswordChanged.bind(this)} 
                        secureTextEntry />
                {/*</CardSection>
                    <Checkbox label="Terms of Service" onValueChange={() => {}}/>
                <CardSection>*/}
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

const mapStateToProps = ({ signup }) => {
    const { email, password, error, loading } = signup;
    return { email, password, error, loading };
};

export default connect(mapStateToProps, { 
    createEmailChanged, createPasswordChanged, createUser
})(SignupForm);