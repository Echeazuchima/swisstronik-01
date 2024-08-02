require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["aa329e94a4ce30476b0f2545f54a18fd448351cf1c7c7d564502cff76d48431f"], //Your private key starting with "0x"
    },
  },
};
