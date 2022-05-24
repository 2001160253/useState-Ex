import React, { Component } from "react";
import style from "./changeGlasses.module.css";
import v1 from "./asset/img/v1.png";
import v2 from "./asset/img/v2.png";
import v3 from "./asset/img/v3.png";
import v4 from "./asset/img/v4.png";
import v5 from "./asset/img/v5.png";
import v6 from "./asset/img/v6.png";
import v7 from "./asset/img/v7.png";
import v8 from "./asset/img/v8.png";
import v9 from "./asset/img/v9.png";
import model from "./asset/img/model.jpg";

class ChangeGlasses extends Component {
  state = {
    img: v1,
  };

  selectGlasses = (img) => {
    this.setState({ img: img });
  };

  addClass = (...classes) => {
    return classes.join(" ");
  };

  render() {
    return (
      <div className={style.container}>
        <div className={style.bg}>
          <div className={style.header}>Try Glasses Online</div>

          <div className={style.sample}>
            <img src={model} alt="Glasses"></img>
            <img
              src={this.state.img}
              alt="Glasses"
              className={style.GlassesUse}
            ></img>
          </div>

          <div className={style.product}>
            <div
              onClick={() => {
                this.selectGlasses(v1);
              }}
              className={this.addClass(style.item, style.itemV1)}
            >
              <img src={v1} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v2);
              }}
              className={this.addClass(style.item, style.itemV2)}
            >
              <img src={v2} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v3);
              }}
              className={this.addClass(style.item, style.itemV3)}
            >
              <img src={v3} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v4);
              }}
              className={this.addClass(style.item, style.itemV4)}
            >
              <img src={v4} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v5);
              }}
              className={this.addClass(style.item, style.itemV5)}
            >
              <img src={v5} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v6);
              }}
              className={this.addClass(style.item, style.itemV6)}
            >
              <img src={v6} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v7);
              }}
              className={this.addClass(style.item, style.itemV7)}
            >
              <img src={v7} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v8);
              }}
              className={this.addClass(style.item, style.itemV8)}
            >
              <img src={v8} alt="Glasses"></img>
            </div>

            <div
              onClick={() => {
                this.selectGlasses(v9);
              }}
              className={this.addClass(style.item, style.itemV9)}
            >
              <img src={v9} alt="Glasses"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangeGlasses;
