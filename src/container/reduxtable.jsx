import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEL, EDIT } from "../redux/actions/action";

const reduxtable = () => {
  const [boolean, setBoolean] = useState(true);
  const dispatch = useDispatch();

  const dlt = (index) => {
    dispatch(DEL(index));
  };

  const arrayData = useSelector((state) => state.cartreducer.arrayState);
  console.log("arrayData here:",arrayData);
  
  const handleEdit = (elem,id) => {
    dispatch(EDIT(elem,id));
  };

  return (
    <div>
      <table className="table table-dark table-striped-columns">
        <thead>
          <tr>
            <th>UserName</th>
            <th>UserEmail</th>
            <th>UserNumber</th>
            <th>Action1</th>
            <th>Action2</th>
          </tr>
        </thead>
        <tbody>
          {arrayData.map((elem, index) => {
            return (
              <tr key={index}>
                <td>{elem.userName}</td>
                <td>{elem.userEmail}</td>
                <td>{elem.userNumber}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEdit(elem,elem.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      dlt(elem.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default reduxtable;
