import React from "react";
import "./Modal.css";

function Modal({ children, showModal, modalText, close }) {
  console.log(`showModal state =  ${showModal}`);
  return showModal ? (
    <div
      className="modalBackground"
      onClick={() => {
        // close modal when outside of modal is clicked
        console.log("Clicking background");
        close();
      }}
    >
      <div className="modalContainer">
        <div className="body">
          <iframe
            className="iframe"
            width="100%"
            height="700px"
            src={modalText}
            title="Search Results"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  ) : null;
}

export default Modal;
