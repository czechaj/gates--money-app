import React from "react";
import { useSelector } from "react-redux";
import { selectMoney } from "../../redux/amount/moneySlice";
import "./styles.css";

function Amount() {
  const money = useSelector(selectMoney);
  return (
    <div className="amount">
      <span className="money">${money}</span>
    </div>
  );
}

export default Amount;
