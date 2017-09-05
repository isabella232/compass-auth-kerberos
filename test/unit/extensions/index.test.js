const Reflux = require('reflux');
const StateMixin = require('reflux-state-mixin');
const { expect } = require('chai');
const Actions = require('../../../lib/actions');
const extension = require('../../../lib/extensions');

describe('Extensions', () => {
  const store = Reflux.createStore({
    mixins: [StateMixin.store],
    getInitialState() {
      return { currentConnection: {}};
    }
  });

  before(() => {
    extension(store);
  });

  describe('#onKerberosPrincipalChanged', () => {
    it('changes the principal in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberos_principal).to.equal('test');
        done();
      });
      Actions.onKerberosPrincipalChanged('test');
    });
  });

  describe('#onKerberosPasswordChanged', () => {
    it('changes the password in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberos_password).to.equal('pw');
        done();
      });
      Actions.onKerberosPasswordChanged('pw');
    });
  });

  describe('#onKerberosServiceNameChanged', () => {
    it('changes the service name in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberos_service_name).to.equal('sn');
        done();
      });
      Actions.onKerberosServiceNameChanged('sn');
    });
  });
});
