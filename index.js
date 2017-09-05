const Kerberos = require('./lib/components');
const extension = require('./lib/extensions');

/**
 * The Kerberos auth role component.
 */
const KERBEROS_AUTH_ROLE = {
  name: 'KERBEROS',
  selectOption: { KERBEROS: 'Kerberos' },
  component: Kerberos
};

/**
 * Activate all the components in the Kerberos plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function activate(appRegistry) {
  appRegistry.registerRole('Connect.AuthenticationMethod', KERBEROS_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the Kerberos plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthenticationMethod', KERBEROS_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

module.exports = Kerberos;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
