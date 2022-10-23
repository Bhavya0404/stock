export const ListCoins = (state) =>
  `https://api.twelvedata.com/quote?symbol=${state}&apikey=demo`;

export const TimeWise = (state1, time) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${state1}&interval=5min&apikey=demo`;

  export const MonthWise = (state2) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=demo`;

export const RealTime = (state2) =>
  `https://api.twelvedata.com/quote?symbol=${state2}&apikey=demo`;

export const AllTheStocks = (state2) => `https://api.twelvedata.com/stocks`;
