import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/amount/moneySlice";
import "./styles.css";

function Receipt() {
  const receiptItems = useSelector(selectItems);

  return (
    <div className="receipt">
      <h1>Your receipt</h1>
      <ul className="receipt-list">
        {receiptItems.map((item) => (
          <ul key={item.id} className="receipt-list-item">
            <li className="item-title"> {item.title}</li>
            <li className="item-piece"> x{item.piece}</li>
            <li className="item-total">${item.price * item.piece}</li>
          </ul>
        ))}

        <hr />
        <div className="total">
          <h2>Total</h2>
          <h3>
            ${receiptItems.reduce((acc, obj) => acc + obj.price * obj.piece, 0)}
          </h3>
        </div>
      </ul>
    </div>
  );
}

export default Receipt;
