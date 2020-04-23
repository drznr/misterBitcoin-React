import { httpService } from './HttpService';

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

function getRate(coins, currency = 'USD') {
    return httpService.get(`https://blockchain.info/tobtc?currency=${currency}&value=${coins}`);
}

function getMarketPrice(timespan = '3months') {
    return httpService.get(`https://api.blockchain.info/charts/market-price?timespan=${timespan}&format=json&cors=true`);
}

function getConfirmedTransactions(timespan = '3months') {
    return httpService.get(`https://api.blockchain.info/charts/trade-volume?timespan=${timespan}&format=json&cors=true`);
}