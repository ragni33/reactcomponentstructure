import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Body from "./components/Body";

import Services from './Pages/Services';
import About from './Pages/About';
import Contact from './Pages/Contact';



ReactDOM.render(
  <>
 <Header />
 <Body />
 <h2 style={{textAlign: "center"}}> Services</h2>
 <Services />
 <Services />  <Services />


 
  </>,
  document.getElementById("root")

);