import React, { Component } from "react";
import style from "./GlassesList.module.css";

class GlassesList extends Component {
  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA182_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA176_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA177_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA178_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA179_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA180_V2.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA176_V1.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA184_V1.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "https://is4.fwrdassets.com/images/p/fw/p/GUCC-WA162_V1.jpg",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderClasses = () => {
    const glassesHTML = this.data.map((item, index) => {
      return (
        <div key={item.id} className={style.item}>
          <img src={item.url} alt=""></img>
          <h2>{item.name}</h2>
          <p className={style.dollar}>{item.price} $</p>
          <p>{item.desc}</p>
        </div>
      );
    });
    return glassesHTML;
  };
  render() {
    return (
      <div className={style.container}>
        <h1>Danh sách sản phẩm</h1>
        <div className={style.row}>
          <div className={style.col}>{this.renderClasses()}</div>
        </div>
      </div>
    );
  }
}

export default GlassesList;
