export const ListCoins = (state) =>
  `https://api.twelvedata.com/quote?symbol=${state}&apikey=demo`;

export const TimeWise = (state1, time) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;

export const RealTime = (state2) =>
  `https://api.twelvedata.com/quote?symbol=${state2}&apikey=demo`;

export const AllTheStocks = (state2) => `https://api.twelvedata.com/stocks`;
