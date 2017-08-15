import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { loginEmailChanged, loginPasswordChanged, loginUser, loginUserWithToken, toggleLoginRemembered } from '../actions';
import { Card, CardSection, TextField, Button, Spinner, Checkbox } from './common';

class LoginForm extends Component {
    componentWillMount() {
        if(this.props.authWithToken) {
            console.log('token login prop found');
            this.props.loginUserWithToken();
        } else {
            console.log('token login prop NOT found');
        }
    }
    onEmailChange(newText) {
        this.props.loginEmailChanged(newText);
    }
    onPasswordChange(newText) {
        this.props.loginPasswordChanged(newText);
    }
    onButtonPress() {
        const { email, password, rememberMe } = this.props;
        this.props.loginUser({email, password, rememberMe})
    }
    onSignupPress() {
        this.props.navigation.navigate('Signup');
    }
    renderError() {
        if( this.props.error != '' ) {
            return (
                <CardSection>
                    <Text style={styles.errorTextStyle}>{ this.props.error }</Text>
                </CardSection>
            );
        }
    }
    renderButton() {
        if(this.props.loading) {
            return <CardSection><Spinner size="large" /></CardSection>;
        } else {
            return  (
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
                </CardSection>
            );
        }
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <TextField
                        onChangeText={this.onEmailChange.bind(this)}
                        autoCorrect={false}
                        label="Email"
                        autoCapitalize="none"
                        placeholder="test@gmail.com"
                        keyboardType="email-address"
                        value={this.props.email} />
                </CardSection>
                <CardSection>
                    <TextField
                        onChangeText={this.onPasswordChange.bind(this)}
                        secureTextEntry
                        label="Password"
                        placeholder="********" 
                        value={this.props.password}/>
                </CardSection>
                <CardSection>
                    <Checkbox label="Stay Logged In" value={this.props.rememberMe} onValueChange={this.props.toggleLoginRemembered.bind(this, !this.props.rememberMe)} />
                </CardSection>
                { this.renderError() }
                { this.renderButton() }
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = (state) => {
    const { email, password, user, error, loading, rememberMe } = state.auth;

    return { email, password, user, error, loading, rememberMe };
}

export default connect(mapStateToProps, { 
    loginEmailChanged, loginPasswordChanged, loginUser, loginUserWithToken, toggleLoginRemembered
})(LoginForm);