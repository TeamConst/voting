// Allows us to use ES6 in our migrations and tests.
require("babel-register");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6600000,
    },
  },
  compilers: {
    solc: {
      version: "0.7.3",
    },
  },
};
