const React = require('react');
const PropTypes = require('prop-types');
const isEmpty = require('lodash.isempty');
const { FormInput } = require('hadron-react-components');
const { shell } = require('electron');
const Actions = require('../actions');

/**
 * The kerberos auth role component.
 */
class Kerberos extends React.Component {

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
      </div>
    );
  }
}

Kerberos.propTypes = {
  currentConnection: PropTypes.object.isRequired,
  isValid: PropTypes.bool
};

Kerberos.displayName = 'Kerberos';

module.exports = Kerberos;
