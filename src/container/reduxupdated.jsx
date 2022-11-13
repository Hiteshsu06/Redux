import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../redux/actions/action';
import './reduxupdated.css' ;
import {Link} from 'react-router-dom';

const reduxupdated = () => {
    const item = useSelector((state) => state.reducer.products);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState([]);
    const [isUpdate, setIsupdate] = useState(false);
    const [currentID, setCurrentID] = useState(false)
    
    const addData = () => {
      setIsupdate(!true)
      dispatch(addTodo(todo))
      setTodo("")
    };
    const del = (id) => {
  
      dispatch(deleteTodo(id));
      setTodo("");
    }
    const edit = (id, data) => {
      setIsupdate(true)
      setCurrentID(id);
      setTodo(data);
    };
  
    const update = () => {
      dispatch(updateTodo(currentID, todo));
      setCurrentID("");
      setTodo("");
      setIsupdate(false)
    }
  
    // const view =(id,data)=>{
      
    // }

    return (
      <div className='App'>
        <div className='container'>
          <div className="input-group input-group-lg">
            <h3>CURD OPERATION</h3>
            <input
              type="text"
              placeholder='Text Here'
              onChange={(e) => setTodo(e.target.value)}
              className="form-control"
              value={todo}
            />
            {
              isUpdate ? <><button className='btn btn-primary' onClick={() => update()}>Update</button></> :
                <button className='btn btn-primary' onClick={() => addData()} >Add</button>
            }
          </div>
  
        </div>
        <div className='subcontainer'>
        <table className="table table-dark table-striped-columns">
            <thead>
                <tr>
                    <th>ENTRY HERE</th>
                    <th>Action1</th>
                    <th>Action2</th>
                    <th>Action3</th>
                </tr>
            </thead>
            <tbody>
            {
            item.map((element, id) => {
              return (
                <tr key={id}>
                <td>{element.data}</td>
                <td><button className="btn btn-primary" onClick={() => del(id)}>Delete</button></td>
                <td><button className='btn btn-primary' onClick={() => edit(element.id, element.data)}>Edit</button></td>
                <td><button onClick={() => view(element.id, element.data)}><Link className='btn btn-primary' to="/routingfile" state={element.data}>VIEW</Link></button></td>
              </tr>
              )
            })
          }     
            </tbody>
        </table>
        </div>
      </div>
    );
  }

export default reduxupdated
