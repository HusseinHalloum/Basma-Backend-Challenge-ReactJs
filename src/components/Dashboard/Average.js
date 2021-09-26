import React, { useState, useEffect } from "react";

import Axios from "axios";
import { Dropdown } from "react-bootstrap";

const Average = () => {
  const [average, setAverage] = useState("");
  const [period, setPeriod] = useState(1);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  // console.log(config);
  // GET Average DATA
  useEffect( () => {
    const getCustomers = async () => {
      try{
        const response = await Axios.get(`http://localhost:8000/api/admin/customers/average?date=${period}`,config);
        if(response.status == 200){
          setAverage(response.data.average);
        };
      } catch (error){
        console.log(error);
      }
    }
    getCustomers();
  }, [period]);
  return (
    <div className="average-container">
      <div className="average-inner-container display-flex">
        The average number of registrations within
        <select onChange={event => setPeriod(parseInt(event.target.value))} value={period} className="period-select">
            <option value="1">last 24 hrs</option>
            <option value="7">last week</option>
            <option value="30">last month</option>
            <option value="90">last 3 months</option>
            <option value="365">last year</option>
        </select>
        is :
        
        <span className="average-number">{average && average}</span>
      </div>
    </div>
  );
};

export default Average;
