const React = require('react');
const chai = require('chai');
const expect = chai.expect;
const chaiEnzyme = require('chai-enzyme');
const { mount } = require('enzyme');
const CnameInput = require('../../lib/components/cname-input');

chai.use(chaiEnzyme());

describe('<CnameInput />', () => {
  describe('#render', () => {
    context('when the connection is not canonicalizing the host name', () => {
      const component = mount(<CnameInput canonicalize_hostname={false} />);

      it('renders the wrapper div', () => {
        expect(component.find('.form-item')).to.be.present();
      });

      it('renders the label', () => {
        expect(component.find('.form-item-label')).to.have.text('Canonicalize Host Name');
      });

      it('renders the switch', () => {
        expect(component.find('.form-control-switch')).to.be.present();
      });
    });

    context('when the connection is canonicalizing the host name', () => {
      const component = mount(<CnameInput canonicalize_hostname />);

      it('renders the wrapper div', () => {
        expect(component.find('.form-item')).to.be.present();
      });

      it('renders the label', () => {
        expect(component.find('.form-item-label')).to.have.text('Canonicalize Host Name');
      });

      it('enables the switch', () => {
        expect(component.find('input')).to.have.prop('checked', true);
      });
    });
  });
});
