import React from "react";
import PropTypes from "prop-types";
import Card from "../Components/Card";
export default function MainContainer(props) {
  return (
    <div className="main-container">
      {props.item && props.item.map((item) => <Card item={item}></Card>)}
    </div>
  );
}
MainContainer.propTypes = {
  item: PropTypes.array,
};
