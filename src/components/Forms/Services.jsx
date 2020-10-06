import React from "react";
import "./Services.css";

import Logo from "../../images/logo.png";
import Clearfix from "../../components/Clearfix/Clearfix";
/* components imports */

import AdminHeader from "../../components/AdminHeader/AdminHeader";

export default props => (
  <>
    <AdminHeader/>
    <label>Nome:</label>
    <input></input>
    <label>Descrição curta:</label>
    <input></input>
    <label>Descrição longa:</label>
    <textarea></textarea>
  </>
);