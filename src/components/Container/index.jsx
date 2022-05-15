import React from "react";
import Amount from "../Amount";
import Header from "../Header";
import Items from "../Items";
import Receipt from "../Receipt";
import './styles.css'
function Container() {
  return (
    <div className="container">
      <Header />
      <Amount />
      <Items />
      <Receipt />
    </div>
  );
}

export default Container;
