import React from "react";
import "../styles/components/modal.scss";

export default function Modal(props) {
  if (!props.show) {
    return null;
  } else {
    return (
      <div className="modal">
        <div className="modal-content">
          <div className="modal-body">Employee Created !</div>
          <button className="modal-button" onClick={props.onClose}>
            x
          </button>
        </div>
      </div>
    );
  }
}
