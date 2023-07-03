import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import Header from "../../components/Header";
import "./style.css";
import itemData from "./itemData.js";

const Service2 = () => {
  const [currentItemData, setCurrentItemData] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceID = params.get("id");
    const itemIndex = params.get("item");

    if (
      serviceID &&
      itemIndex &&
      itemData[serviceID]?.items &&
      itemData[serviceID]?.items[itemIndex]
    ) {
      setCurrentItemData(itemData[serviceID].items[itemIndex]);
    }
  }, []);

  const [details, setDetails] = useState({
    Email: "",
    Mobile: "",
    City: "",
  });

  const handleClick = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const [record, setRecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = { ...details };
    setRecord([...record, newData]);
  };

  return (
    <Fragment>
      <Header />
      <section className="banner-padding">
        <div className="wrapper">
          <div className="left-wing">
            <h2 className="left-wing-heading">{currentItemData?.name}</h2>
            <br />
            <br />
            {/* <ul>
              <li>{currentItemData?.desc}</li>
              <li> {currentItemData?.middesc}</li>
              <li> {currentItemData?.enddesc}</li>

              <br />
            </ul> */}
            <p>{currentItemData?.desc}</p>
            <br />
            <p>{currentItemData?.middesc}</p>
            <br />
            <p>{currentItemData?.enddesc}</p>
            <br />
          </div>
          <div className="right-wing">
            <br />
            <div className="form-container">
              <p className="form-heading">Get Started!</p>
              <form className="signup-form">
                <div className="user-container">
                  <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    onChange={handleClick}
                    value={details.Email}
                    name="Email"
                  />
                </div>
                <div className="user-container">
                  <input
                    type="tel"
                    placeholder="Mobile No."
                    autoComplete="off"
                    onChange={handleClick}
                    value={details.Mobile}
                    name="Mobile"
                  />
                </div>
                <div className="user-container">
                  <input
                    type="text"
                    placeholder="City"
                    autoComplete="off"
                    onChange={handleClick}
                    name="City"
                    value={details.City}
                  />
                </div>

                <button onClick={handleSubmit}>Consult an expert</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Service2;
