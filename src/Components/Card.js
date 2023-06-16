import React from "react";
import PropTypes from "prop-types";
export default function Card(props) {
  return (
    <div className="inner-container card">
      <h4>
        <b>
          Name:{" "}
          {props.item.name.charAt(0).toUpperCase() + props.item.name.slice(1)}
        </b>
      </h4>
    </div>
  );
}
Card.propTypes = {
  item: PropTypes.array,
};
