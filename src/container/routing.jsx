import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import "./routing.css";


const routing = (props) => {
const location=useLocation();
console.log(props,"props");
console.log(location,"useLocationhook");
const data=location.state;
  return (
    <div className='details_here'>
       <button><Link className='btn btn-primary' to="/">BACK</Link></button>
       <h1>{data}</h1>
    </div>
  )
}

export default routing