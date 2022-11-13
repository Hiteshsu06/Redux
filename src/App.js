import './App.css';
// import Practice from './container/practice.jsx';
// import Hello from './container/hello';
// import Form from "./container/form";
// import Reduxform from './container/reduxform.jsx';
// // import Reduxtable from './container/reduxtable.jsx';
// import Reduxupdated from './container/reduxupdated';
// import Routingfile from './container/routing';
// import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
// import Imageupload from './container/imageuploader';
import Imagecrop from './container/imagecrop.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import  Navbar  from './container/navbar';
// import Apicall from './container/apicall';
// import Postaxios from './container/postaxios';
// import Practiceasyn from './container/practiceasyn'

function App() {
  return (
    <div>
      <Imagecrop/>
      {/* <Imageupload/> */}
      {/* <Apicall/> */}
      {/* // <Postaxios/> */}
      {/* <Practiceasyn/> */}
    </div>
    // <BrowserRouter>
    //   <Routes> 
    //    <Route path="/" element={<Reduxupdated/>}/>
    //    <Route path="/routingfile" element={<Routingfile/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
