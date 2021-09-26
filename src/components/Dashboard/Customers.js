import React, { useState, useEffect } from "react";

import Search from "../../assets/icons/search-alt.svg";

import Axios from "axios";
import CustomerItem from "./CustomerItem";

const Customers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);

  const [customers, setCustomers] = useState([]);

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  // GET Average DATA
  useEffect(async () => {
    await Axios.get(
      `http://localhost:8000/api/admin/customers?searchValue=${searchValue}&page=${page}&perPage=${perPage}`,
      config
    ).then((response) => {
      setCustomers(response.data.customers);
    });
  }, [searchValue, perPage, page]);

  const searchHandler = (event) => {
    setPage(1);
    setSearchValue(event.target.value);
  }
  return (
    <div className="customers-container">
      <div className="customer-inner-container">
        <h5 className="customers-title">View Customers :</h5>
        <div className="filter-container">
          <div className="col-md-4 kt-margin-b-20-tablet-and-mobile">
            <div className="kt-input-icon kt-input-icon--left">
              <span className="search-container">
                <span className="search-icon-container">
                  <img src={Search} alt="" />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Global search"
                  id="generalSearch"
                  value={searchValue}
                  onChange={searchHandler}
                />
              </span>
            </div>
          </div>
          <div className="pagination-container">
          <span>Per Page</span>
          <select onChange={event => setPerPage(parseInt(event.target.value))} value={perPage} className="perPage-select">
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
            <option value="120">120</option>
            <option value="200">200</option>
        </select>
          </div>
        </div>
        <div className="customers-listing">
            <div className="customers-header-container">
            <div className="header-title-container single-container">ID</div>
                <div className="header-title-container single-container">Name</div>
                <div className="header-title-container single-container">Email</div>
                <div className="header-title-container single-container">Phone</div>
                <div className="header-title-container single-container">Location</div>
            </div>
            {((!customers.data || customers.data.length == 0) && searchValue != '') && <div className="loading-customers"><h1>No Customers Found</h1></div>}
            {!customers.data && <div className="loading-customers"><h1>Loading ...</h1></div>}
            {customers.data && customers.data.map((customer, index) => 
                <CustomerItem key={customer.id} id={customer.id} firstname={customer.firstname} lastname={customer.lastname} email={customer.email} phone={customer.phone} location={customer.location} order={index}/>
            )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
