import React from 'react';
import './Footer.css';

function Footer() {
  // add to cart function

  return (
    <div className="footer">
      <div className="amount">
        <div className="total">$0.00</div>
        <div className="save">Save for later</div>
      </div>
      <div className="buttons">
        <button className="quantity">Qty 1</button>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
}
export default Footer;
