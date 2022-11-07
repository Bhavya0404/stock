import React from "react";
import axios from "axios";
import { ListCoins, RealTime, TopStocks } from "../urls";
import { useEffect, useState } from "react";
import { TimeWise } from "../urls";
const ListStock = () => {
  useEffect(() => {
    const fetchDateandTime = async () => {
    
     // console.log(data1.data["Time Series (5min)"]);
    };
    fetchDateandTime();
  }, []);
  return <div>ListStock</div>;
};

export default ListStock;
