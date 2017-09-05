const React = require('react');
const chai = require('chai');
const expect = chai.expect;
const chaiEnzyme = require('chai-enzyme');
const { mount } = require('enzyme');
const Kerberos = require('../../lib/components');

chai.use(chaiEnzyme());

describe('<Kerberos />', () => {
  describe('#render', () => {
    context('when the form is valid', () => {
      const connection = {
        kerberos_principal: 'principal',
        kerberos_password: 'password',
        kerberos_service_name: 'service'
      };
      const component = mount(
        <Kerberos currentConnection={connection} isValid />
      );

      it('renders the wrapper div', () => {
        expect(component.find('.form-group')).to.be.present();
      });

      it('renders the principal input', () => {
        expect(component.find('input[name="kerberos-principal"]')).to.have.value('principal');
      });

      it('renders the password input', () => {
        expect(component.find('input[name="kerberos-password"]')).to.have.value('password');
      });

      it('renders the service name input', () => {
        expect(component.find('input[name="kerberos-service-name"]')).to.have.value('service');
      });

      it('renders the service name placeholder', () => {
        expect(component.find('input[name="kerberos-service-name"]').prop('placeholder')).to.equal('mongodb');
      });
    });

    context('when the form is not valid', () => {
      context('when the principal is empty', () => {
        const connection = {
          kerberos_principal: '',
          kerberos_password: 'password',
          kerberos_service_name: 'service'
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });

      context('when the principal is null', () => {
        const connection = {
          kerberos_principal: null,
          kerberos_password: 'password',
          kerberos_service_name: 'service'
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });

      context('when the principal is undefined', () => {
        const connection = {
          kerberos_password: 'password',
          kerberos_service_name: 'service'
        };
        const component = mount(
          <Kerberos currentConnection={connection} />
        );

        it('renders the error icon', () => {
          expect(component.find('.fa-exclamation-circle')).to.be.present();
        });

        it('renders the error class', () => {
          expect(component.find('.form-item-has-error')).to.be.present();
        });

        it('renders the error tooltip', () => {
          expect(component.find('input[name="kerberos-principal"]').prop('data-tip')).
            to.equal('Principal is required');
        });
      });
    });
  });
});
