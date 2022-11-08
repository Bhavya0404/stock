import React, { useEffect, useState } from "react";
import axios from "axios";
// import { CryptoState } from "../../CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";

import "react-alice-carousel/lib/alice-carousel.css";
import { TopStocks } from "../../urls";
import { commaSeparate } from "../../commaSeparate";

const Carousel = () => {
  var allStocksArray = [];
  const [coins, setCoins] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // const { currency, symbol } = CryptoState();

  const fetchCoins = async () => {
    const data1 = await axios.get(TopStocks());
    const neww = data1.data["ranking"];
    var temp = 0;
    for (var key in neww) {
      // console.log(neww[key]["portfolio"])
      if (temp > 5) {
        break;
      }
      temp = temp + 3;
      const ne = neww[key]["portfolio"];
      for (var key1 in ne) {
        allStocksArray.push(ne[key1]);
        //  console.log(ne[key1]["symbol"]); //ye share ke naam h
        //  console.log(ne[key1]["shares"]); //ye no. of share h dono ko screen pe dikhana h
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCoins();
    setCoins(allStocksArray);
  }, []);

  console.log(coins);

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  // const items = ["hi"];
  // coins.map((x) => {
  //   console.log(x.symbol)
  //   items.push(x.symbol)
  // })

  // console.log(items)

  // CHANGE THIs

  const items = coins.map((coin) => {
    let profit = coin?.shares >= 0;

    return (
      <Link
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
          textTransform: "uppercase",
          color: "white",
        }}
        to={`/coins/${coin.id}`}
      >
        <img
          src={coin?.image}
          alt={coin.symbol}
          height="80"
          style={{ marginBottom: 10 }}
        />
        <span>
          {coin?.symbol}
          &nbsp;
          <span
            style={{
              color: profit > 0 ? "rgb(14, 203, 129)" : "red",
              fontWeight: 500,
            }}
          >
            {profit && "+"}
            {coin?.shares?.toFixed(2)}%
          </span>
        </span>
        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {coin.symbol} {commaSeparate(coin?.shares.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <Box
      sx={{
        height: "250",
        display: "flex",
        alignItems: "center",
      }}
    >
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </Box>
  );
};

export default Carousel;
