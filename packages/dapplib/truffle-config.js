require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food pledge rebel pitch mistake gloom flower army giggle'; 
let testAccounts = [
"0xeb918e2cab8bb705156f3b8c03cd924e6f031cde3d50840c09e9f8a06ed81f00",
"0xfe0c7ece27ed757e8b6d9ab250e5007ea72db2131882ea36ba72cc6415bc5544",
"0xcceaae0b0b3357750fe3848c9fafb8f1b27a1b1ab4a2741ce80954ed11a473e0",
"0x8394fc15502fcc887763edbacb9d52112fae14d3bd84991bece3bfe8058ff9dc",
"0xfccc080a66b9cc0bb79b82a45e9a0569e9ec9ba63f55963f810248c00152aff9",
"0xa7fd893ed85653fd8222c4e66700c524701c0d51830a7cea42063589ca97156f",
"0x64dc4ecc7ab4e0abfd41df1c3e83ad81e7decfb2f43ac5c261864a8aeef2bf08",
"0x34c71b56eab3187f68dd757227e87bf8d40e49ba4bf838740da464361deeefb1",
"0xfe3f570a927a81712a727042a5e69c0b2beae7fb92fd0e4e7d46a865708ffd94",
"0x0059331baf8812bfc86f9022a9f2b2749984d809f76ba7d61cd517ca9df5b1af"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
