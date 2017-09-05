require('babel-register')({ extensions: ['.jsx'] });

const app = require('hadron-app');
const React = require('react');
const ReactDOM = require('react-dom');
const AppRegistry = require('hadron-app-registry');

const entryPoint = require('../../');
const appRegistry = new AppRegistry();
const Kerberos = require('../../lib/components');

global.hadronApp = app;
global.hadronApp.appRegistry = appRegistry;
entryPoint.activate(appRegistry);

ReactDOM.render(
  React.createElement(Kerberos, { currentConnection: {}, isValid: true }),
  document.getElementById('container')
);
