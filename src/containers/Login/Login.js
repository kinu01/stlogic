import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import withLoading from 'components/withLoading/withLoading';
import { validateEmail } from 'utils/helpers';
import './login.css';

class Login extends PureComponent {
    static propTypes = {
        isLoginProcessing: PropTypes.bool.isRequired,
        onLoginSubmit: PropTypes.func.isRequired,
    };

    state = {
        activeTab: 'user',
        isLogin: true,
        isValidEmail: false,
        isValidNRICPassport: false,
        isValidPassword: false,
    };

    onLoginSubmit = (e) => {
        e.preventDefault();

        let loginData;

        if (this.state.activeTab === 'user') {
            const { email, password } = e.target;

            this.setState({
                isValidEmail: !validateEmail(email.value),
                isValidPassword: !password.value ? true : false
            });

            if (!validateEmail(email.value) || !password.value) {
                return;
            }

            loginData = {
                email: email.value,
                password: password.value,
                system_role: 2
            };
        }
        else {
            const { nric_passport, password } = e.target;

            this.setState({
                isValidNRICPassport: !nric_passport.value ? true : false,
                isValidPassword: !password.value ? true : false
            });

            if (!nric_passport.value || !password.value) {
                return;
            }

            loginData = {
                nric_passport: nric_passport.value,
                password: password.value,
                system_role: 4
            };
        }

        this.props.onLoginSubmit(loginData);
    };

    render() {
        return (
            <div>
                Login page
            </div>
        );
    }
}

export default withLoading(Login);
