const Reflux = require('reflux');

/**
 * The actions for changing kerberos values.
 */
const KerberosActions = Reflux.createActions([
  'onKerberosPrincipalChanged',
  'onKerberosPasswordChanged',
  'onKerberosServiceNameChanged'
]);

module.exports = KerberosActions;
