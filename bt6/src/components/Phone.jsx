import React from "react";
import ItemPhone from "./ItemPhone";
import ListPhone from "./ListPhone";

export default function Phone({}) {
  return (
    <div className="single-product-area">
      <div className="zigzag-bottom" />
      <div className="container">
        <div className="row">
          <ListPhone></ListPhone>
        </div>
      </div>
    </div>
  );
}
