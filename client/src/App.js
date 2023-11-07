import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Navbar from "./layouts/Navbar";
import AllEvents from "./modelus/events/AllEvents";
import UploadEvents from "./modelus/events/UploadEvents";
import MyEvents from "./modelus/events/MyEvents";

let App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events/all" element={<AllEvents/> } />
          <Route path="/events/upload" element={<UploadEvents/> } />
          <Route path="/events/my-event" element={<MyEvents/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
