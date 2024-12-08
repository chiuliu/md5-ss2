import React from "react";
import Phone from "./Phone";
import ItemPhone from "./ItemPhone";

export default function ListPhone() {
  const phones = [
    {
      id: 1,
      img: "/img/product-2.jpg",
      name: "Apple new mac book 2015 March :P",
      price: 899,
    },
    {
      id: 2,
      img: "/img/product-2.jpg",
      name: "Apple new mac book 2015 March :P",
      price: 899,
    },
    {
      id: 3,
      img: "/img/product-2.jpg",
      name: "Apple new mac book 2015 March :P",
      price: 899,
    },
    {
      id: 4,
      img: "/img/product-2.jpg",
      name: "Apple new mac book 2015 March :P",
      price: 899,
    },
    {
      id: 5,
      img: "/img/product-2.jpg",
      name: "Apple new mac book 2015 March :P",
      price: 899,
    },
  ];
  return (
    <>
      {phones.map((phone) => (
        <ItemPhone key={phone.id} phone={phone} />
      ))}
    </>
  );
}
