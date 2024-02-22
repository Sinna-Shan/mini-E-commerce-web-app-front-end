import React from "react";

export default function DeletePopup(props) {
    const handelCancel = function(){
        props.show(!props.state)
    }

    const handelDelete = function(){
        
    };
  return (
    <div className={`popup-background ${props.state ? '' : 'hidden'}`}>
      <div className="modal">
        <img src="assets/alert.svg" alt="" />
        <h2 className="popup-h2">ARE YOU SURE?</h2>
        <h3 className="popup-h3">
          You will not be able to undo this action if you proceed!
        </h3>
        <div className="popup-btn-container">
          <button className="popup-btn popup-btn-cancel" onClick={()=> handelCancel()}>Cancel</button>
          <button className="popup-btn popup-btn-delete" onClick={()=> handelDelete()}>Delete</button>
        </div>
      </div>
    </div>
  );
}
