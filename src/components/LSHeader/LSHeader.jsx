import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Logo from '../../images/logo.png'

export default LSHeader =>
  <Header logo={Logo}>
      <ul>
        <li><a href="#0">Hone</a></li>
        <li><a href="#0">Services</a></li>
        <li><a href="#0">Blog</a></li>
        <li><a href="#0">About</a></li>
        <li><a href="#0">Contact</a></li>
        <li className="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
    </ul>
  </Header>
