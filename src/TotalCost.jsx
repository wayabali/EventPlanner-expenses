import React, { useState, useEffect } from 'react';
import "./TotalCost.css";

const TotalCost = ({ totalCosts, ItemsDisplay , handleClick }) => {
  
    const total_amount = totalCosts.venue + totalCosts.av + totalCosts.meals;

  return (
    <div className="pricing-app">
      <div className="display_box">
        <div className="header">
          <p className="preheading"><h3>Total cost for the event</h3></p>
        </div>
        <div>
          <h2 id="pre_fee_cost_display" className="price">
           ${total_amount}
          </h2>
            <div className='render_items'>
               {ItemsDisplay && <ItemsDisplay />}
            </div>
            <button className='details_button' style={{marginTop : 15}} onClick={handleClick}>RETURN</button>
        </div>
      </div>
    </div>
  );
};

export default TotalCost;
