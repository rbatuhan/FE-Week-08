import React from "react";
import data from "../data";
import { useState, useEffect } from "react";

const Receipt = () => {

  let total = 0;

  return (
    <div className="receipt-container">
      <h2>Your Receipt</h2>
      <ul>
        {data.map((item) => {
          if (item.count > 0) {
            total += item.price * item.count;
            return (
              <li className="receipt-item">
                {item.title} x{item.count} ${item.price * item.count}
              </li>
            );
          }
        })}
      </ul>
      <div className="line"></div>
      <p className="total">TOTAL: {total}</p>
    </div>
  );
};

export default Receipt;
