import React from "react";

/* image imports */

import Logo from "../../images/logo.png";
import Clearfix from "../../components/Clearfix/Clearfix";
/* components imports */

import LoginBox from "../../components/LoginBox";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import Services from "../../components/Forms/Services";
import AdminServiceCard from "../../components/AdminServiceCard/AdminServiceCard";
import Section from "../../components/Section/Section";

export default props => (
  <>
    <AdminHeader/>
    <Services/>
    <Section title="Seus Servicos" subtitle="Aqui voce encontra seus servicoes publicados.">
      <AdminServiceCard title="teste" description="esse e um servico"/>
      <AdminServiceCard title="teste" description="esse e um servico"/>
      <AdminServiceCard title="teste" description="esse e um servico"/>
    </Section>
  </>
);