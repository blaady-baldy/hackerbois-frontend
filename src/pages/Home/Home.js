import React from "react";
//import {init} from "./utils/initDrone.js";
import {Link} from 'react-router-dom';
import './home.css'
import "../student/customer.css"

function Home() {

  return (
<div className="homeContainer">
    <section className="home" >
      <h1>Choose profile here</h1>
      <button ><Link to="/admin">ADMIN</Link></button>
      <button><Link to="/institute">INSTITUTE</Link></button>
      <button><Link to="/student">STUDENT</Link></button>
    </section>
  </div>
  );
}

export default Home;

