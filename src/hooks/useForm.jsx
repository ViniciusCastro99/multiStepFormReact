import { useState } from "react"  // Importa o hook useState para gerenciar o estado

export function useForm(steps) {  // Função hook que recebe 'steps' como argumento (lista de componentes/formulários)
    const [currentStep, setCurrentStep] = useState(0)  // Cria um estado 'currentStep' com o valor inicial 0 (primeira etapa)
    
    function changeStep (i, e) {
        //Essa checagem é necessária para que o preventDefault afete apenas o botão de avançar e permita o funcionamento do botão de retornar o passo.
        if(e) e.preventDefault()

        //Verifica se o índice é menor que 0 ou maior que o numero de passos possíveis.
        if(i < 0 || i >= steps.length) return

        //Se nenhuma da condições acima for verdadeira, altera o número do passo
        setCurrentStep(i)
    }

    return {
        currentStep,  // Retorna o estado atual da etapa (índice do formulário atual)
        currentComponent: steps[currentStep],  // Retorna o componente correspondente à etapa atual, com base no índice 'currentStep'
        changeStep, // Exporta a função que altera o indice do passo para exíbição do componente correto.
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }
}
