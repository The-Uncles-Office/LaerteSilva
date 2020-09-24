import React, {useState} from 'react';

import './styles.css';

import whatsappIcon from '../../images/whatsapp.svg';
import xIcon from '../../images/x-icon.svg';

function Whatsapp() {
    const [toggleChat, setToggleChat] = useState(false);
    const [message, setMessage] = useState("");

    function toggle(){
        setToggleChat(!toggleChat);
    }

    return toggleChat ? <div className="wpp-chat-box">
        <img onClick={toggle} className="x-image" src={xIcon} alt="x-icon"/>
        <textarea spellCheck={false} value={message} onChange={ e => setMessage(e.target.value) } placeholder="Digite sua mensagem aqui!!!" className="text-box" type="text-area"/>
        <a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=+5531998012752&text=${message}`} className="send-message">Enviar</a>
    </div> : <img onClick={toggle} className="wpp-image" src={whatsappIcon} alt="whatsapp-icon"/>;
}

export default Whatsapp;