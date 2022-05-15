import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3AZjzGnU9CXqKIJII_UXdfldT9ea_OgJIw&usqp=CAU"
        alt="Bill Gates"
        className="gates"
      />
      <h1>Spend Bill Gates' Money</h1>
    </div>
  );
}

export default React.memo(Header);
