var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {return new Buffer(hex, 'hex');};

exports.livenet = {
  name: 'livenet',
  magic: hex('a415d3ad'),
  addressVersion: 0x4B,
  privKeyVersion: 199,
  P2SHVersion: 33,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('b61cadb138c7fa4e4298cfebc081e32713309d51d4dff20409afe3f16b31517c'),
    merkle_root: hex('2fb73e30e83b5cbd070d152f183371b43fdaca9bd05eb201323e2463b0086e84'),
    height: 0,
    nonce: 1137826,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1422234505,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    'seed.extractcoin.com',
    'extractcoin.com',
  ],
  defaultClientPort: 18554
};

exports.testnet = {
  name: 'testnet',
  magic: hex('a415d3ad'),
  addressVersion: 71,
  privKeyVersion: 199,
  P2SHVersion: 33,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('b61cadb138c7fa4e4298cfebc081e32713309d51d4dff20409afe3f16b31517c'),
    merkle_root: hex('2fb73e30e83b5cbd070d152f183371b43fdaca9bd05eb201323e2463b0086e84'),
    height: 0,
    nonce: 1137826,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1422234505,
    bits: 0x1e0ffff0,
  },
  dnsSeeds: [
    'seed-testnet.extractcoin.com',
    'testnet.extractcoin.com'
  ],
  defaultClientPort: 28554
};
