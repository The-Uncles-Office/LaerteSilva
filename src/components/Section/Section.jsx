import React from 'react'
import './Section.css'

export default Section =>
<div className="section">
    <h1>{Section.title}</h1>
    <h2>{Section.subtitle}</h2>
    <div className="section-content">
        {Section.children}
    </div>  
</div>