import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import { FormInput } from 'hadron-react-components';
import CnameInput from 'components/cname-input';
import Actions from 'actions';

/**
 * The kerberos auth role component.
 */
class Kerberos extends React.Component {
  static displayName = 'Kerberos';

  static propTypes = {
    currentConnection: PropTypes.object.isRequired,
    isValid: PropTypes.bool
  }

  static defaultProps = {
    currentConnection: {}
  }

  /**
   * Handle the principal change.
   *
   * @param {Event} evt - The event.
   */
  onPrincipalChanged(evt) {
    Actions.onKerberosPrincipalChanged(evt.target.value);
  }

  /**
   * Handle the password change.
   *
   * @param {Event} evt - The event.
   */
  onPasswordChanged(evt) {
    Actions.onKerberosPasswordChanged(evt.target.value);
  }

  /**
   * Handle the service name change.
   *
   * @param {Event} evt - The event.
   */
  onServiceNameChanged(evt) {
    Actions.onKerberosServiceNameChanged(evt.target.value);
  }

  /**
   * Open the help page for the principal.
   */
  onPrincipalHelp() {
    const { shell } = require('electron');
    shell.openExternal('https://docs.mongodb.com/manual/core/kerberos/#principals');
  }

  /**
   * Get the error for the required principal field.
   *
   * @returns {String} The error message.
   */
  getPrincipalError() {
    const connection = this.props.currentConnection;
    if (!this.props.isValid && isEmpty(connection.kerberos_principal)) {
      return 'Principal is required';
    }
  }

  /**
   * Render the kerberos component.
   *
   * @returns {React.Component} The component.
   */
  render() {
    return (
      <div id="kerberos-authentication" className="form-group">
        <FormInput
          label="Principal"
          name="kerberos-principal"
          error={this.getPrincipalError()}
          changeHandler={this.onPrincipalChanged.bind(this)}
          value={this.props.currentConnection.kerberos_principal || ''}
          linkHandler={this.onPrincipalHelp.bind(this)} />
        <FormInput
          label="Password"
          name="kerberos-password"
          type="password"
          changeHandler={this.onPasswordChanged.bind(this)}
          value={this.props.currentConnection.kerberos_password || ''} />
        <FormInput
          label="Service Name"
          placeholder="mongodb"
          name="kerberos-service-name"
          changeHandler={this.onServiceNameChanged.bind(this)}
          value={this.props.currentConnection.kerberos_service_name || ''} />
        <CnameInput
          canonicalize_hostname={this.props.currentConnection.kerberos_canonicalize_hostname || false} />
      </div>
    );
  }
}

export default Kerberos;
