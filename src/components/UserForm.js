import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userFormUpdate } from '../actions';

import { View } from 'react-native';
import { CardSection, TextField } from './common';

class UserForm extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <TextField
                        label="Email"
                        placeholder="example@gmail.com"
                        onChangeText={this.props.userFormUpdate.bind(this, 'email')}
                        autoCapitalize="none"
                        keyboardType="email-address"
                        autocorrect={false}
                        value={this.props.email} />
                </CardSection>
                <CardSection>
                    <TextField
                        label="Password"
                        placeholder="********"
                        onChangeText={this.props.userFormUpdate.bind(this, 'password')} 
                        value={this.props.password}
                        secureTextEntry />
                </CardSection>
                <CardSection>
                    <TextField
                        label="Username"
                        placeholder="Superman"
                        onChangeText={this.props.userFormUpdate.bind(this, 'username')}
                        value={this.props.username} />
                </CardSection>
            </View>
        );
    }
}

const mapStateToProps = ({ userForm }) => {
    const { email, password, username } = userForm;
    return { email, password, username };
};

export default connect(mapStateToProps, { userFormUpdate })(UserForm);