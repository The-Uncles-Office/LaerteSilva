import React from "react";

/* image imports */

import Logo from "../../images/logo.png";
import Clearfix from "../../components/Clearfix/Clearfix";
/* components imports */

import LoginBox from "../../components/LoginBox";
import LSHeader from "../../components/LSHeader/LSHeader";

export default props => (
  <>
    <LSHeader />
    <Clearfix />
    <LoginBox />
  </>
);
