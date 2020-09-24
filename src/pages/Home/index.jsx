import React from "react";

import "../../index.css";

/* image imports */

import HeaderImage from "../../images/header-background.jpg";
import TeamWorkImg from "../../images/header-teamwork.svg";
import service1 from "../../images/services-icon-1.svg";
import service2 from "../../images/services-icon-2.svg";
import service3 from "../../images/services-icon-3.svg";

/* components imports */

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import Card from "../../components/Card/Card";
import ContactMap from "../../components/ContactMap/ContactMap";
import LSHeader from "../../components/LSHeader/LSHeader";

import Whatsapp from '../../components/Whatsapp';
import Credits from "../../components/Credits";

export default props => (
  <>
    <LSHeader />
    <Hero
      title="Laerte Silva"
      href="/contato.html"
      subtitle="Melhor contador de BH"
      img={TeamWorkImg}
      call="Contate"
    />
    <Section title="Servicos" subtitle="Conheca o que podemos fazer por voce!">
      <Card title="Servico 1" description="Servico bacana" src={service1} />
      <Card title="Servico 2" description="Servico bacana" src={service2} />
      <Card title="Servico 2" description="Servico bacana" src={service3} />
    </Section>
    <Section
      title="Informações de Contato"
      subtitle="Não hesite em entrar em contato, basta preencher os campos abaixo e enviar a mensagem!"
    >
      <ContactMap
        adress="Edifício Joaquim de Paula - Rua dos Carijós - 424 - sala 1308 - Centro - Belo Horizonte MG"
        phone="(31) 3275-0464"
        mail="laerteslva@yahoo.com.br"
      ></ContactMap>
      <Whatsapp/>
      <Credits/>
    </Section>
  </>
);
