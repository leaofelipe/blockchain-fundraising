require('dotenv').config()

const { MNEUMONIC_PHRASE, INFURA_NETWORK, DEVELOPER_WALLET_HASH } = process.env

const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')

const compiledFactory = require('./build/CampaignFactory.json')
// const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(MNEUMONIC_PHRASE, INFURA_NETWORK)

const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
  const developerWalletAccount = accounts.filter(account => account === DEVELOPER_WALLET_HASH)[0]

  if (!developerWalletAccount) {
    console.log('Invalid Developer Hash')
    provider.engine.stop()

    return
  }

  console.log('Attempting to deploy from account', developerWalletAccount)

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '10000000', from: developerWalletAccount })

  console.log('Contract deployed to', result.options.address)

  provider.engine.stop()
}

deploy()