import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Carousel, Offcanvas, Nav, NavDropdown, FormControl, Form, Button, Container } from 'react-bootstrap';

function Body() {
  return <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/top1.png"
        alt="First slide" style={ { width: "200px", height: "500px" } }
      />
      <Carousel.Caption style={{ color: "black" }}>
        <h5>Website Development</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/top2.png"
        alt="Second slide" style={ { width: "200px", height: "500px" } }
      />
      <Carousel.Caption style={{ color: "black" }}>
        <h5>Social Media Marketing</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="/images/top3.png" style={ { width: "200px", height: "500px" } }
        alt="Third slide"
      />
      <Carousel.Caption style={{ color: "black" }}>
        <h5>Search Engine Optimization</h5>
        <p>Search engine optimization (SEO) ranks in the search results and getting more organic (non-paid) traffic.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>


}

export default Body;