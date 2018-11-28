const Reflux = require('reflux');

/**
 * The actions for changing kerberos values.
 */
const KerberosActions = Reflux.createActions([
  'onKerberosPrincipalChanged',
  'onKerberosPasswordChanged',
  'onKerberosServiceNameChanged',
  'onCnameToggle'
]);

module.exports = KerberosActions;
