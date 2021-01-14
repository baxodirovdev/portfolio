import { ArrowDownward } from "@material-ui/icons";
import React, { Fragment } from "react";
import "./CardInfo.css";
export const CardInfo = ({ title, number, industry, name, arrow, bgColor }) => {
  return (
    <Fragment>
      <div className="cardInfo" style={{ background: `${bgColor}` }}>
        <div className="cardInfo__box">
          <h3 className="cardInfo__title">{title}</h3>
          <span className="cardInfo__time">{number}</span>
        </div>
        <h4 className="cardInfo__industry">{industry}</h4>
        <p className="cardInfo__name">{name}</p>
      </div>
      {arrow ? <ArrowDownward /> : null}
    </Fragment>
  );
};
