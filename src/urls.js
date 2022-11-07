export const ListCoins = (state) =>
  `https://api.twelvedata.com/quote?symbol=${state}&apikey=demo`;

export const TimeWise = (state1, time) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${state1}&interval=5min&apikey=0ZOBQU6TFH7M286O`;

  export const MonthWise = (state2) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=IBM&apikey=0ZOBQU6TFH7M286O`;

export const RealTime = (state2) =>
  `https://api.twelvedata.com/quote?symbol=${state2}&apikey=demo`;

export const AllTheStocks = (state2) => `https://api.twelvedata.com/stocks`;

export const TopStocks = () => `https://www.alphavantage.co/query?function=TOURNAMENT_PORTFOLIO&season=2021-09&apikey=0ZOBQU6TFH7M286O`;