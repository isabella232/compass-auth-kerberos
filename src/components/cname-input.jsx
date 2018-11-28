const React = require('react');
const PropTypes = require('prop-types');
const Switch = require('react-ios-switch');
const Actions = require('../actions');

class CnameInput extends React.PureComponent {

  onCnameToggle() {
    Actions.onCnameToggle();
  }

  render() {
    return (
      <div className="form-item">
        <label>
          <span className="form-item-label">
            Canonicalize Host Name
          </span>
        </label>
        <div className="form-item-switch-wrapper">
          <Switch
            checked={this.props.canonicalize_hostname}
            onChange={this.onCnameToggle.bind(this)}
            className="form-control-switch"
            onColor="rgb(19, 170, 82)"
            style={{ backgroundColor: 'rgb(255,255,255)'}}
            />
        </div>
      </div>
    );
  }
}

CnameInput.propTypes = {
  canonicalize_hostname: PropTypes.bool.isRequired
};

CnameInput.displayName = 'CnameInput';

module.exports = CnameInput;
