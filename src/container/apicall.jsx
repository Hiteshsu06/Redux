import React ,{useEffect,useState} from 'react';
import Axios from 'axios';
import './apicall.css';

const apicall = () => {

const [inputData,setInputData]=useState([]);
const getData=()=>{
    Axios.get(`https://dummyjson.com/products`).then((response)=>{
    console.log("response.status",response.status)
    setInputData(response.data.products);
    console.log("RESPONSE value here",response.data.products);
    }).catch((error)=>{console.log("ERRORS HERE",error)})

}

useEffect(()=>{
    getData();
},[])

  return (
    <div className="supermain">
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>DESCRIPTION</th>
                        <th>PRICE</th>
                        <th>DISCOUNTEDPERCENTAGE</th>
                        <th>RATING</th>
                        <th>STOCK</th>
                        <th>BRAND</th>
                        <th>CATEGORY</th>
                        <th>THUMBNAIL</th>
                        <th>Image1</th>
                    </tr>
                </thead>
                <tbody>
                    {inputData.map((curElem,index)=>{
                        return(
                            <tr key={index}>
                           <td>{curElem.id}</td>
                           <td>{curElem.title}</td>
                           <td>{curElem.description}</td>
                           <td>{curElem.price}</td>
                           <td>{curElem.discountPercentage}</td>
                           <td>{curElem.rating}</td>
                           <td>{curElem.stock}</td>
                           <td>{curElem.brand}</td>
                           <td>{curElem.category}</td>
                           <td className='thumbimagetd'><img className='thumbimage' src={curElem.thumbnail} alt="thumb" /></td>
                           <td>
                            {curElem.images.map((subElem)=>{
                                return(
                                    <td><img className='thumbimage' src={subElem} alt="" /></td>
                                )
                            })}
                           </td>
                       </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default apicall;