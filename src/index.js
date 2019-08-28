import Kerberos from './plugin';
import extension from 'modules';

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
  appRegistry.registerRole('Connect.AuthStrategy', KERBEROS_AUTH_ROLE);
  appRegistry.registerRole('Connect.Extension', extension);
}

/**
 * Deactivate all the components in the Kerberos plugin.
 *
 * @param {AppRegistry} appRegistry - The app registry.
 */
function deactivate(appRegistry) {
  appRegistry.deregisterRole('Connect.AuthStrategy', KERBEROS_AUTH_ROLE);
  appRegistry.deregisterRole('Connect.Extension', extension);
}

export default Kerberos;
export { activate, deactivate };
