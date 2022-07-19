import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import "./header.css"


const header = () => {
  return (
    <header>
      <Nav activeKey="/about" className="navbar navbar-expand-lg text-dark bg-info" >

        <Nav.Item className="span6 offset1">
          <a href="/" className="btn btn-warning " >Home</a>
        </Nav.Item>
        <Nav.Item>
          <a href="/data" className="btn btn-warning">Data</a>
        </Nav.Item>
        <Nav.Item>
          <a href="/about" className="btn btn-warning">About Us</a>
        </Nav.Item>
        <Nav.Item>
          <a href="/contact" className="btn btn-warning">Contact Us</a>
        </Nav.Item>
      </Nav>
    </header >
  )
}

export default header 