import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Cardsdata from './CardsData'
import "./style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { INC } from '../redux/actions/action';
import { DEC } from '../redux/actions/action';
import {ADDING} from '../redux/actions/action';

const Cards = () => {

  const [data, setData] = useState(Cardsdata);
  console.log(data);


  const dispatch = useDispatch();


  const send = (e)=>{
    //  console.log(e);
    dispatch(ADD(e));
    console.log(ADD(e));

    dispatch(ADDING(1));
    console.log(ADDING(1))
  }

  const Increment=()=>{
    dispatch(INC(100));
    console.log(INC(100));
  }
  
  const Decrement=()=>{
    dispatch(DEC(100))
  }


  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to Cart Projects</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

      <div className="row d-flex justify-content-center align-items-center">
        {
          data.map((element, id) => {
            return (
              <div key={id}>
                <Card style={{ width: '22rem',border:"none" }}  className="mx-2 mt-4 card_style">
                  <Card.Img variant="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>
                    Price : ₹ {element.price}
                    </Card.Text>
                    <div className="button_div d-flex justify-content-center">
                    <Button variant="primary"  
                      onClick={()=> send(element)}
                     className='col-lg-12'>Add to Cart</Button>
                    </div>
                  
                  </Card.Body>
                </Card>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Cards