
import './App.css';
import React, { useState } from 'react'
import Navbar from './conponents/Navbar';
import News  from './conponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
const App=()=>{
     const [progress,setprogress]=useState(0);
   let pageSize=10;
          
    return (
      <div>
      <Router>
        <Navbar/>
        <LoadingBar
        height={3}
    color="#f11946"
    progress={progress}
  />
        <Routes>
        <Route exact path="/" element={<News setprogress={setprogress} pageSize={pageSize}  key="general" country="us"  category="general"/>}/>
          <Route exact path="/business" element={<News setprogress={setprogress} pageSize={pageSize} key="business" country="us"  category="business"/>}/>
          <Route exact path="/entertainment" element={<News setprogress={setprogress} pageSize={pageSize} key="entertainment" country="us"  category="entertainment"/>}/>
          <Route exact path="/sports" element={<News setprogress={setprogress} pageSize={pageSize} key="sports" country="us"  category="sports"/>}/>
          <Route exact path="/health" element={<News setprogress={setprogress} pageSize={pageSize} key="health" country="us"  category="health"/>}/>
          <Route exact path="/science" element={<News setprogress={setprogress} pageSize={pageSize}  key="science" country="us"  category="science"/>}/>
          <Route exact path="/general" element={<News setprogress={setprogress} pageSize={pageSize} key="general" country="us"  category="general"/>}/>
          <Route exact path="/technology" element={<News setprogress={setprogress} pageSize={pageSize} key="technology" country="us"  category="technology"/>}/>
          </Routes>
      </Router>
      </div>
    )
}
export default App;
