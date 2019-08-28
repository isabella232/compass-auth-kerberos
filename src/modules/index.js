import Actions from 'actions';

/**
 * Change the kerberos principal.
 *
 * @param {String} principal - The principal.
 */
function onKerberosPrincipalChanged(principal) {
  this.state.currentConnection.kerberosPrincipal = principal;
  this.trigger(this.state);
}

/**
 * Change the kerberos password.
 *
 * @param {String} password - The password.
 */
function onKerberosPasswordChanged(password) {
  this.state.currentConnection.kerberosPassword = password;
  this.trigger(this.state);
}

/**
 * Change the kerberos service name.
 *
 * @param {String} name - The service name.
 */
function onKerberosServiceNameChanged(name) {
  this.state.currentConnection.kerberosServiceName = name;
  this.trigger(this.state);
}

/**
 * Handle change of cname param.
 */
function onCnameToggle() {
  const connection = this.state.currentConnection;
  connection.kerberosCanonicalizeHostname = !connection.kerberosCanonicalizeHostname;
  this.trigger(this.state);
}

/**
 * When extending the connect plugin, we bind the instance of the store
 * to our functions here, so when our actions are called the changes
 * are happening to the connection model in the connect plugin's store.
 *
 * @param {Store} store - The connect plugin store instance.
 */
function extendAuthentication(store) {
  const principal = onKerberosPrincipalChanged.bind(store);
  const password = onKerberosPasswordChanged.bind(store);
  const serviceName = onKerberosServiceNameChanged.bind(store);
  const cName = onCnameToggle.bind(store);

  Actions.onKerberosPrincipalChanged.listen(principal);
  Actions.onKerberosPasswordChanged.listen(password);
  Actions.onKerberosServiceNameChanged.listen(serviceName);
  Actions.onCnameToggle.listen(cName);
}

export default extendAuthentication;
