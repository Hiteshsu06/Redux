import React ,{useState,useEffect}from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { AiOutlineDelete} from "react-icons/ai";
import {DEL} from '../redux/actions/action';

const CardsDetails = () => {

const dispatch = useDispatch();
const dlt=(el)=>{
  dispatch(DEL(el))
}
const [price,setPrice]=useState(0);
console.log(price);

const total=()=>{
  let price =0;
  getData.map((el)=>{
    price= el.price+price
  });
  setPrice(price);
}
useEffect(()=>{
  total()
},[total])

const getData = useSelector((state)=> state.cartreducer.carts);
console.log(getData);
const counter = useSelector((state)=> state.cartreducer2)
// console.log(counter);
const quantity = useSelector((state)=>state.cartreducer3);

  return (
    <div>
      <h3>{counter}</h3>
      <h3>{quantity}</h3>
      <h3>{getData.length}</h3>
      {getData.length ?
      <>
      {getData.map((e)=>{
        return(
          <div className='main' key={e.id}>
          <div className="main">{e.rname}</div>
          <div className="title">{e.price}</div>
          <button onClick={()=>{dlt(e.id)}}><AiOutlineDelete/></button>
         </div>
        )
      })}
      </>
     : <h2>I AM SORRY BABU</h2>}
    </div>
  )
}

export default CardsDetails