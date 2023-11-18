import React, { useCallback } from 'react';
import { deleteDoc, doc } from 'firebase/firestore/lite';


function Card({ id, title, description, price, db }) {

  const deleteGrocery = async() => {
    try {
      await deleteDoc(doc(db, "groceries", id));
    } catch(err) {
      alert(err);
    }
    
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Qty: {description}</p>
        <small className="text-body-secondary">${price}</small>
      </div>
      <button onClick={deleteGrocery} className="submitButton">
        Delete
      </button>
    </div>
  );
}

export default Card;
