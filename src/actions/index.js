import Reflux from 'reflux';

/**
 * The actions for changing kerberos values.
 */
const KerberosActions = Reflux.createActions([
  'onKerberosPrincipalChanged',
  'onKerberosPasswordChanged',
  'onKerberosServiceNameChanged',
  'onCnameToggle'
]);

export default KerberosActions;
