import Web3 from 'web3'

let web3



if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider)
} else {
  // Not on browser or user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    process.env.NEXT_PUBLIC_INFURA_NETWORK
  )

  web3 = new Web3(provider)
}

export default web3