import React,{useState} from 'react';
import './practiceasync.css';


const practiceasyn = () => {
const [name,setName]=useState("");
// const [updatedName,setUpdatedName]=useState("")
const fetchFunc=()=>{
  fetch('https://reqres.in/api/users',
{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({
    "first_name":`${name}`
  })
}
)
.then((response)=>{
  if(response.status == 201){
    return response.json();
  } else{
    console.log("error here")
  }
}).then((data)=>{
  console.log(data)
})
}



  // fetch('https://reqres.in/api/users' + data + {
  //   method: 'DELETE',
  // })
  // .then(res => {
  //   return res.json()
  // }) 
  // .then(data => console.log(data))

// fetch('https://dummyjson.com/products')
//   .then((response) => response.json())
//   .then((data) => console.log(data.products));
// console.log("i am here");
// console.log("you are here");
// console.log("we are here");

// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`subcribe to ${username}`)
//         },5000)
//     })
// };

// function importantAction1(number){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`subcribe to ${number}`)
//         },8000)
//     })
//     };

// function importantAction2(email){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             setTimeout(()=>{
//                 resolve(`subcribe to ${email}`)
//           },3000) 
//         })
//     })};

// importantAction("roadside coder")
// .then((response)=>{
//      console.log("response",response)
//      return(importantAction1("i am harish"))
// })
// .then((response)=>{
//     console.log("response",response)
//     return(importantAction2("i am jacky"))
// })
// .then((response)=>{
//    console.log(response)
// })
// .catch((error)=>{
//     console.log(error)
// })

// importantAction("roadside coder",function(message){
//     console.log(message);
//     importantAction1("8888888888",function(number){
//         console.log(number);
//         importantAction2("har@gmail.com",function(email){
//             console.log(email);
//         })
//     })  
// })


// console.log("start");
// const sub= new Promise((resolve,reject)=>{
// const input=true;
// if(input==true){
//     setTimeout(()=>{
//         resolve(console.log("i am great"))
//     },1000)
// }
// else{
//     setTimeout(()=>{
//         reject(console.log("am not great"))
//     },5000)
// }
// })

// console.log(sub)
// sub.then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
// console.log("END");

// var a=9;
// a=55;
// console.log(a);
const submitHandler=(e)=>{
e.preventDefault();
fetchFunc();
// setUpdatedName(name);
setName("");
}


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='input'>
        <input type="text" value={name} name="name" placeholder='Name' className="form-control" onChange={(e)=>setName(e.target.value)}/>
        <button className="button">SUBMIT</button>
        </div>
      </form>
    </div>
  )
}

export default practiceasyn