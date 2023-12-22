import React from 'react';
import Plantmain from './components/Plantmain';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Register from './components/Register';
import {Routes,BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Routes> 
        {/* <Route path="/" element={<Sidebar />}></Route> */}
        <Route path="/" element={<Plantmain/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Plantmain' element={<Plantmain/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
