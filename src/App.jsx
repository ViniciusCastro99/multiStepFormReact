// Importação dos componentes que serão alternados na aplicação
import UserForm from './components/UserForm'  // Formulário para o usuário preencher informações
import ReviewForm from './components/ReviewForm'  // Formulário de avaliação do produto
import ThaksForm from './components/ThanksForm'  // Formulário de agradecimento após a avaliação
import Steps from './components/Steps'

// Importação dos Hooks
import { useForm } from "./hooks/useForm"  // Hook customizado para controlar o estado dos formulários e etapas
import { useState } from 'react'

import './App.css'  // Estilos da aplicação

//importação dos ícones
import { GrFormPrevious, GrFormNext} from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import { BsEmojiAngryFill } from 'react-icons/bs'
import reviewForm from './components/ReviewForm'

//Form templete é utilizado pra inicializar o estado data como um template vázio
const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  //Esse estado será utilizado para persistência dos dados.
  const [data, setData] = useState(formTemplate)

  const updateFielHandler = (key, value) => {

    setData((prev) =>{
      return {...prev, [key]:value}
    })
  }


  /*
    - Eu poderia fazer com que um if gerenciasse qual formulário será exibido.
    - Mas o código fica mais limpo se eu criar uma lista com os componentes.
    - Assim deixo a responsabilidade de alternar os componentes de exibição para o hook que vou criar.
  */

  // Lista de componentes (etapas) que serão exibidos sequencialmente
  const formComponents = [
  <UserForm data={data} updateFielHandler={updateFielHandler}/>, 
  <ReviewForm data={data} updateFielHandler={updateFielHandler}/>, 
  <ThaksForm data={data} />]

  // Usando o hook useForm para gerenciar o estado atual da etapa e o componente a ser exibido
  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>  {/* Título da página */}
        <p>
          Ficamos felizes com a sua compra, utiliza o formulário abaixo para avaliar o produto.
        </p>  {/* Descrição do propósito do formulário */}
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/> {/* Título da seção de etapas */}
        <form onSubmit={(e)=> changeStep(currentStep + 1, e)} > {/*Chama a função do hook e avança um passo */}
          <div className="inputs-container">{currentComponent}</div>  {/* Componente atual, dependendo da etapa */}
          <div className="actions">
            {/* Essa verificação tira o botão de retornar na primeira etapa, visto que não há para onde retornar */}
            {!isFirstStep && (
              <button type='button' onClick={() => changeStep(currentStep - 1)}>  {/* Chama a função do hook e retorna um passo. (É tipo button para não submeter formulário.) */}
                <GrFormPrevious/>  {/* Ícone de seta para voltar */}
                <span>Voltar</span>  {/* Texto do botão */}
              </button>
            )}
            {/* Essa verificação permite trocar o botão na ultima etapa, para o botão de envio do formulário */}
            {!isLastStep ?(
              <button type='submit' >  {/* Botão de avançar, tipo 'submit' para enviar o formulário */}
                <span>Avançar</span>  {/* Texto do botão */}
                <GrFormNext/>  {/* Ícone de seta para avançar */}
              </button>):(
              <button type='button' >  {/* Botão de avançar, tipo 'submit' para enviar o formulário */}
                <span>Enviar</span>  {/* Texto do botão */}
                <FiSend/>  {/* Ícone de seta para avançar */}
              </button>
              )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App  