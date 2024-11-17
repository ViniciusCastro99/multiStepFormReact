import React from 'react'
import "./ThanksForm.css"

import{
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral:<BsFillEmojiNeutralFill/>,
  satisfied:<BsFillEmojiSmileFill/>,
  very_satisfied:<BsFillEmojiHeartEyesFill/>,
}

const ThanksForm = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>
        A sua opinião é importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra.
      </p>
      <p>Para concluír a avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
      <p className='review-data'>
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]} {/*Acessa uma das chaves do objeto emojiData, dinâmicamente */}
      </p>
      <p className='review-data'>
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default ThanksForm
