import React from 'react';
import Chart from '../cmps/Chart';

import { bitcoinService } from '../services/BitcoinService';

class Statistics extends React.Component {
  state = {
    marketData: null,
    transactionData: null
  }

async componentDidMount() {
  const [ marketData, transactionData ] = await Promise.all([
    await bitcoinService.getMarketPrice(),
    await bitcoinService.getConfirmedTransactions()
  ]);
  this.setState({marketData, transactionData});
}

  render() {
    return (
      <div className="statistics container">
        <Chart data={this.state.marketData}></Chart>
        <Chart data={this.state.transactionData}></Chart>
      </div>
    );
  }
}

export default Statistics;
