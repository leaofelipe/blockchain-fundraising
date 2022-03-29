import React, { Component } from 'react'
// import getContractInstance from '../smart-contract/factory'
import factory from '../smart-contract/factory'

class CampaignIndex extends Component {
  async componentDidMount() {
    const campaigns = await factory.methods.getDeployedCampaigns().call()

    console.log(campaigns)
  }

  render() {
    return <div>Campaign Indexx</div>
  }
}

export default CampaignIndex