import React from 'react'
import axios from "axios";
import { ListCoins, RealTime } from "../urls";
import { useEffect, useState } from "react";
import { TimeWise } from "../urls";
const ListStock = () => {
    useEffect(() => {
        const fetchDateandTime = async () => {
          const  data1  = await axios.get(TimeWise("IBM"));
          console.log(data1);
        };
        fetchDateandTime();
      }, []);
  return (
    <div>ListStock</div>
  )
}

export default ListStock