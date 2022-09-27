import React from 'react'
import axios from "axios";
import { ListCoins, RealTime, AllTheStocks } from "../urls";
import { useEffect, useState } from "react";
import { TimeWise } from "../urls";

const AllStocks = () => {
    useEffect(() => {
        const fetchDateandTime = async () => {
          const  data1  = await axios.get(AllTheStocks());
          console.log(data1);
        };
        fetchDateandTime();
      }, []);
  return (
    <div>AllStocks</div>
  )
}

export default AllStocks