import React, { useState } from "react";
import Sidebar from "./Sidebar";
import CardMenu from "./CardMenu";

const burger = [
  {
    title: "Italian Burger",
    img: "b1.avif",
    price: "7.49",
  },
  {
    title: "Sausage Burger",
    img: "b2.avif",
    price: "6.04",
  },
  {
    title: "Twin Burger",
    img: "b3.avif",
    price: "8.00",
  },
  {
    title: "Large Burger",
    img: "b4.avif",
    price: "10.00",
  },
];

const pizza = [
  {
    title: "Italian Pizza",
    img: "piz1.avif",
    price: "7.49",
  },
  {
    title: "Sausage Pizza",
    img: "piz2.avif",
    price: "6.04",
  },
  {
    title: "Twin Pizza",
    img: "piz3.avif",
    price: "8.00",
  },
  {
    title: "Large Pizza",
    img: "piz4.avif",
    price: "10.00",
  },
];

const cupCake = [
  {
    title: "Italian Cup Cake",
    img: "cc1.avif",
    price: "7.49",
  },
  {
    title: "Sausage Cup Cake",
    img: "cc2.avif",
    price: "6.04",
  },
  {
    title: "Twin Cup Cake",
    img: "cc3.avif",
    price: "8.00",
  },
  {
    title: "Large Cup Cake",
    img: "cc4.avif",
    price: "10.00",
  },
];

const ramen = [
  {
    title: "Italian Ramen",
    img: "r1.avif",
    price: "7.49",
  },
  {
    title: "Sausage Ramen",
    img: "r2.avif",
    price: "6.04",
  },
  {
    title: "Twin Ramen",
    img: "r3.avif",
    price: "8.00",
  },
  {
    title: "Large Ramen",
    img: "r4.avif",
    price: "10.00",
  },
];
const iceCream = [
  {
    title: "Italian Ice Cream",
    img: "ic1.avif",
    price: "7.49",
  },
  {
    title: "Sausage Ice Cream",
    img: "ic2.avif",
    price: "6.04",
  },
  {
    title: "Twin Ice Cream",
    img: "ic3.avif",
    price: "8.00",
  },
];
const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState("burger");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <header className="top-0 left-0 right-0 z-10 m-0 p-0">
        <span className="uppercase text-sm font-semibold text-[var(--themeRed)]">Our Menu</span>
        <div className="flex flex-col font-bold">
          <h1 className="font-bold text-2xl">Menu That Always</h1>
          <h1 className="font-bold text-2xl">Makes You Fall In Love</h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-row mt-20 overflow-y-auto items-center">
        <div className="w-[10%]">
          <Sidebar handleMenuClick={handleMenuClick} />
        </div>

        <div className="flex flex-col w-[90%] overflow-y-auto items-center">
          <CardMenu news={selectedMenu === "burger" ? burger : []} />
          <CardMenu news={selectedMenu === "pizza" ? pizza : []} />
          <CardMenu news={selectedMenu === "cupcake" ? cupCake : []} />
          <CardMenu news={selectedMenu === "ramen" ? ramen : []} />
          <CardMenu news={selectedMenu === "icecream" ? iceCream : []} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
