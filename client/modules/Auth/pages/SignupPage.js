import React, { Component, PropTypes } from 'react';

import { signUpRequest } from '../AuthActions';
import { connect } from 'react-redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';


class SignupPage extends Component {
  signup() {
    this.props.dispatch(signUpRequest({
      email: this.refs.email.value,
      password: this.refs.password.value,
    }));
  }

  render() {
    return (<div>
      <div>
        <h2 ><FormattedMessage id="register" /></h2>
        <input placeholder={this.props.intl.messages.email} ref="email" />
        <input placeholder={this.props.intl.messages.password} ref="password" />
        <a href="#" onClick={this.signup.bind(this)}><FormattedMessage id="register" /></a>
      </div>
    </div>);
  }
}
// Retrieve data from store as props
function mapStateToProps() {
  return {
  };
}

SignupPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

SignupPage.contextTypes = {
  router: React.PropTypes.object,
};

export default injectIntl(connect(mapStateToProps)(SignupPage));
