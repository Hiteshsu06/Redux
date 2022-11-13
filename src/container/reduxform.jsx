import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE} from "../redux/actions/action";
import "./practice2.css";

const reduxform = () => {
  const dispatch = useDispatch();
  // const capturedData = useSelector((state) => state.cartreducer);
  // const booleanData = useSelector((state) => state.cartreducer.blankState);
  // console.log("Boolean Data here:",booleanData);
  // const EditedData = useSelector((state) => state.cartreducer.objectState[0]);
  // console.log("EDITEDData here:",EditedData);

  const [userName, setUserName] = useState("");
  const [userEmail, setUseremail] = useState("");
  const [userNumber, setUsernumber] = useState("");
  const [toggleSubmit, setTogglesubmit] = useState(true);
 console.log("CONSOLE OF INPUT DATA",userName,userEmail,userNumber);
  // useEffect(() => {
  //   if (EditedData && booleanData == true) {
  //     setUserName(EditedData.userName);
  //     setUseremail(EditedData.userEmail);
  //     setUsernumber(EditedData.userNumber);
  //     setTogglesubmit(false);
  //   }
  // }, [EditedData]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (toggleSubmit) {
      const id = new Date().getTime();
      const data = { id, userName, userNumber, userEmail };
      dispatch(STATE(data));
      setUserName("");
      setUseremail("");
      setUsernumber("");
    }

    if (!toggleSubmit) {
      const updatedId = EditedData.id;
      const data1 = { updatedId, userName, userNumber, userEmail };
      dispatch(UPDATE(data1));
      setTogglesubmit(true);
      setUserName("");
      setUseremail("");
      setUsernumber("");
    }
  };

  return (
    <div>
      <div className="main2">
        <form onSubmit={submitHandler} id="reduxForm">
          <h3>INPUT FORM</h3>
          <div className="mb-3">
            <label className="form-label" id="forminput1">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={userName}
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" id="forminput2">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="userEmail"
              value={userEmail}
              placeholder="UserEmail"
              onChange={(e) => setUseremail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" id="forminput3">
              Number
            </label>
            <input
              type="text"
              className="form-control"
              name="userNumber"
              value={userNumber}
              placeholder="UserNumber"
              onChange={(e) => setUsernumber(e.target.value)}
            />
          </div>
          {toggleSubmit ? (
            <button className="btn btn-primary">SUBMIT</button>
          ) : (
            <button className="btn btn-primary">UPDATE</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default reduxform;
