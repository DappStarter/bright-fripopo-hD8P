require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give nation flush special drift rebel situate come hunt lock slot genuine'; 
let testAccounts = [
"0xc38a5fb917684b83a3964b56716c2591f59ede2ad38f999278292dcb1a9a97ff",
"0x83f03ec352434521e1c0e440fb716de1f0e176844ce1cd6ca347ce20a3c0c84e",
"0x25340e20468dba4b92ac48369194e5930a3cc5f672487e465366738c6694436d",
"0x107295f4013938bc837b7756c3edb0784d8f4d437dab2d9fe2b18b6d25a2d841",
"0x12cc71d8c5955907fbcdd0b9b8fea464baad1b93909006530093d4ee5f081385",
"0x6c7542c170f49ef8cea36cf88954cd8df2025e351cb35e28a118bc8c4b701455",
"0xeb44bfbbb2bdb68f4016d5153c363b626592bd6fbd9cd4e31d8b97f8cbcb4371",
"0x9279345d02deda8090b414c9c07bdbae7d04ffef04de93be7bce4ae857181466",
"0x2d64f9c1bb7321f322256fd3c88a8faddf9f2e14746d3e9801a539a24bc1c5d7",
"0xf26a5547bf1e95544350f7d6881c7c1ff8485b4ceeede8ad6654886b495be82b"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

