import React from "react";
import axios from "axios";
import { ListCoins, RealTime } from "../urls";
import { useEffect, useState } from "react";
import { TimeWise } from "../urls";
const ListStock = () => {
  useEffect(() => {
    const fetchDateandTime = async () => {
      const data1 = await axios.get(TimeWise("IBM"));

      const neww = data1.data["Time Series (5min)"];
      let sampleObjectKeys = Object.keys(neww);
      console.log("number of keys", sampleObjectKeys.length);
      for(var key in neww) {
        
            console.log(neww[key]["1. open"])
        
     }

      console.log(data1.data["Time Series (5min)"]);
    };
    fetchDateandTime();
  }, []);
  return <div>ListStock</div>;
};

export default ListStock;
