import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div>
      <div className="container">
        {/* <p className="header">Look at some of our offerings</p> */}
        <div className="content">
          <div className="wrapper">
            <div className="box vintage">
              <img src="https://images.unsplash.com/photo-1561986810-4f3ba2f46ceb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"alt="EMMYLOU" width="900px" height="900px"/>
              <h2>Brewing</h2>
              <p>I'll be your Emmylou and I'll be your June</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="box w-content">
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt="Jenny of Oldstones"/>
              <div className="frame">
                <h2>Crops efficiency</h2>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="box postcard">
              <img src="https://images.unsplash.com/photo-1649779117064-107e63b88758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"alt="BOX"/>
              <h2>
                Do it <p className="hide">Our way</p>
              </h2>
            </div>
          </div>
          <div className="wrapper">
            <div className="box zoom-in">
              <img src="https://images.unsplash.com/photo-1535419342184-f4bd555a3c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"alt="Postcards From Italy"/>
              <h2>Ferment</h2>
              <p>The best wines</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="box blury-card">
              <img src="https://images.unsplash.com/photo-1626906722163-bd4c03cb3b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"alt="Blue Ridge Mountains"/>
              <div className="frame">
                <h2>Grow</h2>
                <p>The best quality crops</p>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="box zoom-out">
              <img src="https://images.unsplash.com/photo-1615475436142-cea647957e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"alt="Melody Noir"/>
              <div className="frame">
                <h2>
                  Cook
                </h2>
                <p>
                  With the best ingredients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
