import React,{useState} from 'react';
import './hello.css';

const hello = () => {
const [inputs,setInputs]=useState({});
const [update,setUpdate]=useState([]);

const addClickHandler=(e)=>{
    e.preventDefault();
    setUpdate([...update,myNewInput]);
    console.log(update)
    setInputs({ 
    name:"",
    email:"",
    age:"",
    gender:"",
    department:""});
}
const deleteItem =(id) =>{
        setUpdate((update)=>{
            return update.filter((arrElem,index)=>{
                return index !== id
            })
        })
   }
   const handleEdit=(curElem,id)=>{
    console.log("ID IS HERE:",id);
    setInputs(curElem);
     
   }

const myNewInput={
    name:inputs.name,
    email:inputs.email,
    age:inputs.age,
    gender:inputs.gender,
    department:inputs.department
}
  return (
    <div id='main'>
        <div id="main0"><h1>LOGIN FORM</h1></div>
        <div id='main000' >
        <form> 
               <div id='main1'>  
               <div id='main1-1'>
               <label>Name</label>
               <br />
               <input  type="text" placeholder='name' value={inputs.name} onChange={({target}) => setInputs(state => ({...state,name:target.value}))}/>
               </div>

               <div id='main1-2'>
               <label>Email</label>
               <br />
               <input type="email" placeholder='email' value={inputs.email} onChange={({target}) => setInputs(state => ({...state,email:target.value}))}/>
               </div>

               <div id='main1-3' value={inputs.gender} onChange={({target}) => setInputs(state => ({...state,gender:target.value}))} >
               <label>Gender</label>
               <br />
               <input type="radio" id="gender" name="gender" value="male" />
                     <label>male</label>
               <input type="radio" id="gender" name="gender" value="female"  />
                     <label>female</label>
               </div>

               <div id='main1-4'>
               <label>Department</label>
               <br />
               <select name="department" id="department" value={inputs.department} onChange={({target}) => setInputs(state => ({...state,department:target.value}))}>
                    <option value="none">none</option>
                    <option value="kgb">KGB</option>
                    <option value="saab">SAAB</option>
                    <option value="marcus">MARCUS</option>
                    <option value="raw">RAW</option>
               </select>
               </div>

               <div id='main1-5'>
               <label>AGE</label>
               <br/>
               <input type="number" placeholder='AGE' value={inputs.age} onChange={({target}) => setInputs(state => ({...state,age:target.value}))}/>
               </div>
               <button onClick={addClickHandler}>SAVE</button>
               </div>
        </form>
        </div>
        <div id='main2'>
        <table>
            <tr>
            <th className='polio'>Name</th>
            <th className='polio'>Email</th>
            <th className='polio'>Gender</th>
            <th className='polio'>Department</th>
            <th className='polio'>Age</th>
            </tr>
            <tbody>
           {update.map((curElem,index)=>{
            return(  
               <tr className='top' key={index}>
               <td className='polo'>{curElem.name}</td>
               <td className='polo'>{curElem.email}</td>
               <td className='polo'>{curElem.gender}</td>
               <td className='polo'>{curElem.department}</td>
               <td className='polo'>{curElem.age}</td>
            <button onClick={()=> handleEdit(curElem,index)}>RESET</button>
            <button onClick={() => deleteItem(index)}>DELETE</button>
            </tr>
            )
            })}
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default hello