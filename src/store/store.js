import { createStore } from "redux";

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { 
          id: 1, title: 'Criando componentes',
          description: `Criação do arquivo e suas sintaxes (gerais e export default). 
          O 'export default Componente' é usado no React quando se quer exportar apenas o Componente.
          Para importar basta usar 'import Componente from ../Componente'
          O uso de props para comunicação das variáveis entre os componentes. A prop Children.`
        },
        { 
          id: 2, title: 'Componentes de Classe X de Função',
          description: `Componentes de função além de ter um código mais direto, 
          permitem o uso de hooks. Já os componentes de classe possui um código mais verboso
          e não permite o uso de hooks.
          `
        },
        { 
          id: 3, title: 'Composição de Componentes',
          description: `Pode ser passado código JSX com uma quantidade de elementos não restrita
          para os componentes filhos utilizando-se a prop children. Isso permite uma maior customização
          na hora de compor componentes.`
        },
        { 
          id: 4, title: 'Hook useState',
          description: `Permite atualizar a visualização a partir da mudança do valor de uma variável em que
          se é usado este hook. Também é fornecida uma função de atualização para fazer esta atualização.` 
        },
        { 
          id: 5, title: 'Hook useEffect',
          description: `Permite causar um efeito de executar um código fornecido no momento em que as variáveis mudarem de valor
          Se nenhuma variável for fornecida, o código fornecido só será executado uma vez na inicialização da página.` 
        },
        { 
          id: 6, title: 'Hook useParams', 
          description: `Permite extrair parâmetros da url.` 
        },
        { 
          id: 7, title: 'Roteamento',
          description: `A biblioteca react-router-dom sofreu bastantes mudanças, inclusive na sintaxe e forma de usar a partir da versão 6.
          É preciso encapsular o app com o BrowserRouter, e para utilizar mais rotas, agora é inserido os elementos Routes que deverão possuir os elementos filhos Route.
          O atributo path se manteve, mas agora em vez de component é utilizado o element para atribuir um componente a rota.` 
        },
        { 
          id: 8, title: 'Bibliotecas: react-icons, axios',
          description: `Após a instalação do react-icons, é possível procurar o ícone desejado em https://react-icons.github.io/react-icons/
          e utilizá-lo como um componente React` 
        }
      ]
    },
    {
      id: 2, title: 'Aprendendo Redux',
      lessons: [
        { 
          id: 9, title: 'Connect',
          description: `` 
        },
        { 
          id: 10, title: 'createStore',
          description: `` 
        },
        { 
          id: 11, title: 'Reducer',
          description: `` 
        },
        { 
          id: 12, title: 'Provider',
          description: `` 
        }
      ]
    },
  ]
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { 
      ...state, 
      activeLesson: action.lesson,
      activeModule: action.module
    }
  }
  return state;
}

const store = createStore(reducer);

export default store;