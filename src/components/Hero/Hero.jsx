import React from 'react'
import './Hero.css'

export default Hero =>
<div className="bg-url container full-width no-margin">
  <div className="col-10 container hero-wrapper">
    <div className="row">
      <div className="col-6 center-block text-center">
        <div className="hero-overlay center-block padding-top-xlg text-left padding-bottom-xlg margin-bottom-xlg text-black mobile-center">
          <h1 className="margin-none no-wrap text-left">{Hero.title}</h1>
          <p className="margin-top-xsm margin-bottom-none">{Hero.subtitle}</p><div className="desktop-only padding-top-lg margin-bottom-lg text-center"><a href={Hero.href} className="btn margin-left-none">{Hero.call}</a></div>
        </div>
      </div>
      <div className="col-6 text-center">
        <img className="img-responsive" src={Hero.img}/>
        <div className="mobile-only margin-top-none margin-bottom-xlg margin-left-xlg margin-right-xlg text-center">
            <a href={Hero.href} className="btn">{Hero.call}</a>
        </div>
        <div className="tablet-only margin-top-none margin-bottom-xlg margin-left-xlg margin-right-xlg text-center">
            <a href={Hero.href} className="btn">{Hero.call}</a>
        </div>
      </div>
    </div>
  </div>
</div>