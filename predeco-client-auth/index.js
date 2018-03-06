
const { authService } = require('./configuration.json');

const serviceConfig = {
  ip: authService.ip,
  port: authService.port
};

/*
TODO Implement high quality error handling.
TODO Authenticate needs to handle case of invalid service config. Otherwise
this code will hang when the config is invalid.
*/

/**
 * Authenticate the user against the auth service.
 */
const authenticate = () => {
  if (!validServiceConfiguration(serviceConfig)) {
    return new Error('Auth service configuration is invalid. Fix and then restart.')
  }
  return authenticateMiddleware;
};

const authenticateMiddleware = (req, res, next) => {
  // 1. Take request and validate that the token info is valid
  // 2. If token info is valid, append the user information otherwise redirect
  // back to login page.
};

const validServiceConfiguration = (serviceConfig) => {
  if (!(typeof serviceConfig === 'object') || Array.isArray(serviceConfig)) {
    console.error('Auth service configuration must be an object. Config: ', serviceConfig);
    return false;
  }
  let arePresent = [];
  for (const field in Object.getOwnPropertyNames(serviceConfig)) {
    arePresent.push(['ip', 'port'].includes(field));
  }
  return arePresent.every(Boolean);
};

module.exports.authenticate = authenticate;
