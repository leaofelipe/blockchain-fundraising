const path = require('path')
const solc = require('solc')
const fs = require('fs-extra')

// This file needs to be optimized a lot.

const CONTRACTS_PATH = path.resolve(__dirname, 'contracts')

const BUILD_PATH = path.resolve(__dirname, 'build')
fs.removeSync(BUILD_PATH)

const CAMPAIGN_PATH = path.resolve(CONTRACTS_PATH, 'Campaign.sol')
const CAMPAIGN_FACTORY_PATH = path.resolve(CONTRACTS_PATH, 'CampaignFactory.sol')

const campaignSource = fs.readFileSync(CAMPAIGN_PATH, 'utf-8')
const campaignFactorySource = fs.readFileSync(CAMPAIGN_FACTORY_PATH, 'utf-8')

const input = {
  sources: {
    'Campaign.sol': campaignSource,
    'CampaignFactory.sol': campaignFactorySource,
  }
}

const output = solc.compile(input, 1).contracts

fs.ensureDirSync(BUILD_PATH)

for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(BUILD_PATH, contract.replace(':', '').replace(/\.sol.*/,'') + '.json'),
    output[contract]
  )
}