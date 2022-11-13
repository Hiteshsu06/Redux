import React, { useState } from "react";
import "./hello.css";

const form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [department, setDepartment] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const myNewInput = {
    name: name,
    email: email,
    age: age,
    gender: gender,
    department: department,
    checkbox: checkbox,
  };
  const [inputs, setInputs] = useState(myNewInput);
  const [toggleSubmit, setTogglesubmit] = useState(true);
  const [isEditItem, setIsedititem] = useState(null);
  const [formError, setFormError] = useState({});
  const [array, setArray] = useState([]);

  // Delete Button
  const deleteItem = (id) => {
    setArray((array) => {
      return array.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  // Save & Update Button
  const submitFormhandler = (e) => {
    e.preventDefault();
    setFormError(validate(inputs));
    if (!toggleSubmit) {
      //Update Button
      setArray(
        array.map((elem, id) => {
          if (id === isEditItem) {
            return {
              ...elem,
              name: name,
              age: age,
              department: department,
              email: email,
              gender: gender,
              checkbox: checkbox,
            };
          }
          return elem;
        })
      );
      setTogglesubmit(true);
      setName("");
      setAge("");
      setDepartment("");
      setEmail("");
      setGender("");
      setInputs("");
      setCheckbox("");
    }
    if (
      name &&
      age &&
      gender &&
      department &&
      checkbox &&
      email &&
      name.length > 4 &&
      name.length < 10
    ) {
      setArray([...array, inputs]);
      setName("");
      setAge("");
      setDepartment("");
      setEmail("");
      setGender("");
      setInputs("");
      setCheckbox("");
    }
  };

  // Error Handling
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "* UserName required";
    } else if (values.name.length < 4) {
      errors.name = "* More then 4";
    } else if (values.name.length > 10) {
      errors.name = "* less then 10";
    }
    if (!values.email) {
      errors.email = "* UserEmail required";
    }
    if (!values.age) {
      errors.age = "* UserAge required";
    }
    if (!values.gender) {
      errors.gender = "* UserGender required";
    }
    if (!values.department) {
      errors.department = "* UserDepartment";
    }
    if (!values.checkbox) {
      errors.checkbox = "* UserCheckbox";
    }
    return errors;
  };
  //Onchange event
  const handleData = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "age") {
      setAge(e.target.value);
    } else if (e.target.name == "gender") {
      setGender(e.target.value);
    } else if (e.target.name == "department") {
      setDepartment(e.target.value);
    } else if (e.target.name == "checkbox") {
      setCheckbox(!checkbox);
    }
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  //Edit Button Handler
  const handleEdit = (curElem, index) => {
    setTogglesubmit(false);
    const data = curElem;
    setName(data.name);
    setAge(data.age);
    setDepartment(data.department);
    setEmail(data.email);
    setGender(data.gender);
    setCheckbox(data.checkbox);
    setIsedititem(index);
    setTogglesubmit(false);
  };
  return (
    <div id="main">
      <div id="main1">
        <form onSubmit={submitFormhandler} id="myForm">
          <h2>Login Form</h2>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleData}
            />
            <div className="error">{formError.name}</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleData}
            />
            <div className="error">{formError.email}</div>
          </div>
          <div className="mb-3">
            <label className="form-label2">Age</label>
            <input
              className="form-control"
              type="text"
              placeholder="Age"
              name="age"
              value={age}
              onChange={handleData}
            />
            <div className="error">{formError.age}</div>
          </div>
          <div className="radiobtn" id="main1-3" value={gender} name="gender">
            <label>Gender</label>
            <input
              className="form-check-input1"
              type="radio"
              id="gender"
              checked={gender === "Male"}
              name="gender"
              onChange={handleData}
              value="Male"
            />
            <label class="form-check-label">Male</label>
            <input
              className="form-check-input2"
              type="radio"
              id="gender"
              checked={gender === "Female"}
              onChange={handleData}
              name="gender"
              value="Female"
            />
            <label className="form-check-label">Female</label>
            <div className="error1">{formError.gender}</div>
          </div>
          <div id="main1-4">
            <label className="form-label1">Department</label>
            <br />
            <select
              className="form-select"
              name="department"
              id="department"
              value={department}
              onChange={handleData}
            >
              <option value="none">Select</option>
              <option value="KGB">KGB</option>
              <option value="SAAB">SAAB</option>
              <option value="MARCUS">MARCUS</option>
              <option value="RAW">RAW</option>
            </select>
            <br />
            <div className="error2">{formError.department}</div>
          </div>
          <div className="checkbox">
            <input
              className="form-check-input"
              type="checkbox"
              checked={checkbox}
              name="checkbox"
              id="checkbox"
              onChange={handleData}
            />
            <label className="form-check-label12">Checkbox</label>
            <div className="error">{formError.checkbox}</div>
          </div>
          {toggleSubmit ? (
            <button className="btn btn-primary">SUBMIT</button>
          ) : (
            <button class="btn btn-primary">UPDATE</button>
          )}
        </form>
      </div>
      <div id="main6">
        <table className="table">
          <thead className="table-dark">
            <tr>
              <th className="polo1">Name</th>
              <th className="polo2">Email</th>
              <th className="polo3">Gender</th>
              <th className="polo4">Department</th>
              <th className="polo5">Age</th>
              <th className="polo6">CHECKBOX</th>
              <th className="polo7">ACTION1</th>
              <th className="polo7">ACTION2</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {array.map((curElem, index) => {
              return (
                <tr className="top" key={index}>
                  <td className="polo1">{curElem.name}</td>
                  <td className="polo2">{curElem.email}</td>
                  <td className="polo3">{curElem.gender}</td>
                  <td className="polo4">{curElem.department}</td>
                  <td className="polo5">{curElem.age}</td>
                  <td className="polo6">{curElem.checkbox}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEdit(curElem, index)}
                    >
                      EDIT
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => deleteItem(index)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default form;
