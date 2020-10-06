import React from 'react'
import './AdminServiceCard.css'

export default AdminServiceCard =>
    <div className="card">
        <div className="card-body">
             <h4 className="card-title">{AdminServiceCard.title}</h4>
             <p>{AdminServiceCard.description}</p>
        </div>
        <div className="card-actions">
            <span onclick={AdminServiceCard.editOnClick}>Editar</span>
            <span> </span>
            <span onclick={AdminServiceCard.removeOnClick}>Excluir</span>
        </div>
    </div>