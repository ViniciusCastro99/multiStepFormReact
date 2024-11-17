import React from 'react'
import "./Steps.css"

//Importação dos ícones

import {AiOutlineUser, AiOutlineStar} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Steps = ({currentStep}) => {
  return <div className="steps"> 
    <div className="step active">
        <AiOutlineUser/>
        <p>Identificação</p>
    </div>
    <div className={`step ${currentStep >= 1 ? "active": "" }`}>{/*Lógica para inserir a classe active */}
        <AiOutlineStar/>
        <p>Avaliação</p>
    </div>
    <div className={`step ${currentStep >= 2 ? "active": "" }`}> 
        <FiSend/>
        <p>Envio</p>
    </div>
  </div>
  
}

export default Steps
