var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "xigmK33KInKfaqakuH4M";
var mnemonic = "refuse detail candy monkey tuna fun express connect direct style issue time";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"+infura_apikey),
            network_id: 3
        }
    }
};
