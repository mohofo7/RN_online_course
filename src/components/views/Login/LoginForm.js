import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';

class LoginForm extends Component {

    state = {
        form: {
            email: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    isEmail: true,
                }
            },
            password: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    minLength: 6
                }
            },
            confirmPassword: {
                value: "",
                valid: false,
                type: "textinput",
                rules: {
                    confirmPass: "password"
                }
            }
        }
    }
    render() {

        return ( 
            <View>
                <Text>Login</Text>
                <TextInput
                    placeholder="ایمیل خود را وارد کنید"
                    type={this.state.form.email.type}
                    value={this.state.form.email.value}
                    autoCapitalize={"none"}
                    keyboardType = {"email-address"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default LoginForm;