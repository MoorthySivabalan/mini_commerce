import React from 'react';
import './Product_style.css';

export default function Pro(value) {
    return (
    <div className="card">
        <div className="imgBox">
          <img src={value.img} alt="image" className="image" />
        </div>
        <div className="contentBox">
          <h3>{value.pname}</h3>
          <h2 className="price"> {value.amount} </h2>
          <a onClick={()=>value.sent(value)} className="buy">Buy Now</a>
        </div>
      </div>
    )
}