import Reflux from 'reflux';
import StateMixin from 'reflux-state-mixin';
import Actions from 'actions';
import extension from 'modules';

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
        expect(state.currentConnection.kerberosPrincipal).to.equal('test');
        done();
      });
      Actions.onKerberosPrincipalChanged('test');
    });
  });

  describe('#onKerberosPasswordChanged', () => {
    it('changes the password in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberosPassword).to.equal('pw');
        done();
      });
      Actions.onKerberosPasswordChanged('pw');
    });
  });

  describe('#onKerberosServiceNameChanged', () => {
    it('changes the service name in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberosServiceName).to.equal('sn');
        done();
      });
      Actions.onKerberosServiceNameChanged('sn');
    });
  });

  describe('#onCnameToggle', () => {
    it('changes the canonicalize host name name in the store', (done) => {
      const unsubscribe = store.listen((state) => {
        unsubscribe();
        expect(state.currentConnection.kerberosCanonicalizeHostname).to.equal(true);
        done();
      });
      Actions.onCnameToggle();
    });
  });
});
