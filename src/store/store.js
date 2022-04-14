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
          O uso de props para comunicação das variáveis entre os componentes. A prop Children.`,
          source: 'https://youtu.be/pDbcC-xSat4?t=811', status: ''
        },
        { 
          id: 2, title: 'Componentes de Classe X de Função',
          description: `Componentes de função além de ter um código mais direto, 
          permitem o uso de hooks. Já os componentes de classe possui um código mais verboso
          e não permite o uso de hooks.`, 
          source: 'https://www.youtube.com/watch?v=OXxul6AvXNs&ab_channel=Rocketseat', status: ''
        },
        { 
          id: 3, title: 'Composição de Componentes',
          description: `Pode ser passado código JSX com uma quantidade de elementos não restrita
          para os componentes filhos utilizando-se a prop children. Isso permite uma maior customização
          na hora de compor componentes.`,
          source: 'https://www.youtube.com/watch?v=HdSrcNnZPEM&ab_channel=DevPleno', status: ''
        },
        { 
          id: 4, title: 'Hook useState',
          description: `Permite atualizar a visualização a partir da mudança do valor de uma variável em que
          se é usado este hook. Também é fornecida uma função de atualização para fazer esta atualização.`,
          source: 'https://youtu.be/pDbcC-xSat4?t=1064', status: ''
        },
        { 
          id: 5, title: 'Hook useEffect',
          description: `Permite causar um efeito de executar um código fornecido no momento em que as variáveis mudarem de valor
          Se nenhuma variável for fornecida, o código fornecido só será executado uma vez na inicialização da página.`,
          source: 'https://youtu.be/jcc9T-5inrk', status: ''
        },
        { 
          id: 6, title: 'Hook useParams', 
          description: `Permite extrair parâmetros da url.`,
          source: 'https://www.youtube.com/watch?v=BLbTGKUzND4&ab_channel=h3webdevtuts', status: ''
        },
        { 
          id: 7, title: 'Roteamento',
          description: `A biblioteca react-router-dom sofreu bastantes mudanças, inclusive na sintaxe e forma de usar a partir da versão 6.
          É preciso encapsular o app com o BrowserRouter, e para utilizar mais rotas, agora é inserido os elementos Routes que deverão possuir os elementos filhos Route.
          O atributo path se manteve, mas agora em vez de component é utilizado o element para atribuir um componente a rota.`,
          source: 'https://www.youtube.com/watch?v=G7hHdcW4kQY&ab_channel=Rocketseat', status: ''
        },
        { 
          id: 8, title: 'Bibliotecas: react-icons, axios',
          description: `Após a instalação do react-icons, é possível procurar o ícone desejado em https://react-icons.github.io/react-icons/
          e utilizá-lo como um componente React`,
          source:'https://www.youtube.com/watch?v=aor9hlcODUE&ab_channel=EricMurphy', status: ''
        }
      ]
    },
    {
      id: 2, title: 'Aprendendo Redux',
      lessons: [
        { 
          id: 9, title: 'Conceitos',
          description: `"Única fonte da verdade." O estado da aplicação é global e concentrado em um único lugar, o store.
          "State é somente leitura." A única forma de mudar o estado é emitindo uma ação. Um objeto descreve o tipo da ação,
          ou seja, o que aconteceu, junto com um NOVO estado.
          "Mudanças são feitas com funções puras." Não mudam o estado da aplicação.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=134&end=900', status: ''
        },
      
        { 
          id: 10, title: 'createStore',
          description: `Cria uma árvore única de estados da aplicação. Se mais de um estado precisa ser gerenciado,
          é possível combiná-los.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1524&end=1553', status: ''
        },
        { 
          id: 11, title: 'Reducer',
          description: `Reducer é uma função de redução que retorna o próximo estado, a partir de um estado inicial e uma ação.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1554&end=1619', status: ''
        },
        { 
          id: 12, title: 'Provider',
          description: `Um provider permite que componentes consumidores assinarem mudanças no contexto.
          Podem ser aninhados para substituir valores mais ao fundo da árvore.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1620&end=1711', status: ''
        },
        { 
          id: 13, title: 'Connect',
          description: `Conecta um componente a um store.`,
          source: 'https://youtu.be/u99tNt3TZf8?start=1712', status: ''
        },
      ]
    },
  ]
}

function reducer(state = INITIAL_STATE, action) {
  let FINAL_STATE;
  switch (action.type) {
    case 'TOGGLE_LESSON':
      if (action.lesson.status !== 'watched') {
        action.lesson.status = 'visualized';
      }
      FINAL_STATE = { 
        activeLesson: { ...action.lesson, lessonIndex: action.lessonIndex },
        activeModule: { ...action.module, moduleIndex: action.moduleIndex },
        modules: [ ...state.modules, ]
      }

      FINAL_STATE.modules[action.moduleIndex].lessons[action.lessonIndex].status = action.lesson.status;
      return FINAL_STATE;
    case 'VIDEO_ENDED':
      FINAL_STATE = { 
        activeLesson: { ...action.activeLesson, },
        activeModule: { ...action.activeModule, },
        modules: [ ...state.modules, ]
      } 

      // Atualizar o status da lesson anterior
      FINAL_STATE.modules[action.activeModule.moduleIndex]
        .lessons[action.activeLesson.lessonIndex]
          .status = 'watched';
  
      const nextLessonInModule = state.modules[action.activeModule.moduleIndex].lessons[action.activeLesson.lessonIndex + 1];
      
      // Receber a proxima lesson do module, se existir
      if (nextLessonInModule) {
        nextLessonInModule.lessonIndex = state.activeLesson.lessonIndex + 1; // O evento não manda o indice: update do state

        FINAL_STATE.activeLesson = nextLessonInModule; // Atualizar a lesson
        nextLessonInModule.status = 'visualized' // Atualizar o status da lesson atual
      } else {
        if (state.modules.length === action.activeModule.moduleIndex + 1) { // ultimo video nao precisa passar para o proximo
          return FINAL_STATE;
        }

        const nextModule = state.modules[action.activeModule.moduleIndex + 1];
        const firstLessonInNextModule = state.modules[action.activeModule.moduleIndex + 1].lessons[0];

        firstLessonInNextModule.lessonIndex = 0;
        nextModule.moduleIndex = state.activeModule.moduleIndex + 1; // O evento não manda o indice: update do state

        FINAL_STATE.activeLesson = firstLessonInNextModule; // Atualizar a lesson
        FINAL_STATE.activeModule = nextModule; // Atualizar o module
        firstLessonInNextModule.status = 'visualized' // Atualizar o status da lesson atual
      }
      return FINAL_STATE;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;