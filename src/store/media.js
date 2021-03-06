import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1, title: 'Iniciando com React', isExpanded: true,
      lessons: [
        { 
          id: 1, title: 'Criando componentes', status: '',
          description: `Criação do arquivo e suas sintaxes (gerais e export default). 
          O 'export default Componente' é usado no React quando se quer exportar apenas o Componente.
          Para importar basta usar 'import Componente from ../Componente'
          O uso de props para comunicação das variáveis entre os componentes. A prop Children.`,
          source: 'https://youtu.be/pDbcC-xSat4?t=811'
        },
        { 
          id: 2, title: 'Componentes de Classe X de Função', status: '',
          description: `Componentes de função além de ter um código mais direto, 
          permitem o uso de hooks. Já os componentes de classe possui um código mais verboso
          e não permite o uso de hooks.`, 
          source: 'https://www.youtube.com/watch?v=OXxul6AvXNs&ab_channel=Rocketseat'
        },
        { 
          id: 3, title: 'Composição de Componentes', status: '',
          description: `Pode ser passado código JSX com uma quantidade de elementos não restrita
          para os componentes filhos utilizando-se a prop children. Isso permite uma maior customização
          na hora de compor componentes.`,
          source: 'https://www.youtube.com/watch?v=HdSrcNnZPEM&ab_channel=DevPleno'
        },
        { 
          id: 4, title: 'Hook useState', status: '',
          description: `Permite atualizar a visualização a partir da mudança do valor de uma variável em que
          se é usado este hook. Também é fornecida uma função de atualização para fazer esta atualização.`,
          source: 'https://youtu.be/pDbcC-xSat4?t=1064'
        },
        { 
          id: 5, title: 'Hook useEffect', status: '',
          description: `Permite causar um efeito de executar um código fornecido no momento em que as variáveis mudarem de valor
          Se nenhuma variável for fornecida, o código fornecido só será executado uma vez na inicialização da página.`,
          source: 'https://youtu.be/jcc9T-5inrk'
        },
        { 
          id: 6, title: 'Hook useParams', status: '', 
          description: `Permite extrair parâmetros da url.`,
          source: 'https://www.youtube.com/watch?v=BLbTGKUzND4&ab_channel=h3webdevtuts'
        },
        { 
          id: 7, title: 'Roteamento', status: '',
          description: `A biblioteca react-router-dom sofreu bastantes mudanças, inclusive na sintaxe e forma de usar a partir da versão 6.
          É preciso encapsular o app com o BrowserRouter, e para utilizar mais rotas, agora é inserido os elementos Routes que deverão possuir os elementos filhos Route.
          O atributo path se manteve, mas agora em vez de component é utilizado o element para atribuir um componente a rota.`,
          source: 'https://www.youtube.com/watch?v=G7hHdcW4kQY&ab_channel=Rocketseat'
        }
      ]
    },
    {
      id: 2, title: 'Aprendendo Redux', isExpanded: true,
      lessons: [
        { 
          id: 8, title: 'Conceitos', status: '',
          description: `"Única fonte da verdade." O estado da aplicação é global e concentrado em um único lugar, o store.
          "State é somente leitura." A única forma de mudar o estado é emitindo uma ação. Um objeto descreve o tipo da ação,
          ou seja, o que aconteceu, junto com um NOVO estado.
          "Mudanças são feitas com funções puras." Não mudam o estado da aplicação.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=134&end=900'
        },
      
        { 
          id: 9, title: 'createStore', status: '',
          description: `Cria uma árvore única de estados da aplicação. Se mais de um estado precisa ser gerenciado,
          é possível combiná-los.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1524&end=1553'
        },
        { 
          id: 10, title: 'Reducer', status: '',
          description: `Reducer é uma função de redução que retorna o próximo estado, a partir de um estado inicial e uma ação.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1554&end=1619'
        },
        { 
          id: 11, title: 'Provider', status: '',
          description: `Um provider permite que componentes consumidores assinarem mudanças no contexto.
          Podem ser aninhados para substituir valores mais ao fundo da árvore.`,
          source: 'https://youtu.be/u99tNt3TZf8?&start=1620&end=1711'
        },
        { 
          id: 12, title: 'Connect', status: '',
          description: `Conecta um componente a um store.`,
          source: 'https://youtu.be/u99tNt3TZf8?start=1712'
        }
      ]
    },
    {
      id: 3, title: 'Bibliotecas', isExpanded: true,
      lessons: [
        { 
          id: 13, title: 'react-icons', status: '',
          description: `Após a instalação do react-icons, é possível procurar o ícone desejado em https://react-icons.github.io/react-icons/
          e utilizá-lo como um componente React`,
          source:'https://www.youtube.com/watch?v=aor9hlcODUE&ab_channel=EricMurphy'
        },
        {
          id: 14, title: 'axios', status: '',
          description: `Faz XMLHttpRequests do navegador suportando Promises, também pode interceptar ou cancelar as requests.`,
          source: 'https://www.youtube.com/watch?v=VM4e37DaskU'
        }
      ]
    },
  ]
}

export const mediaSlice = createSlice({
  name: 'media',
  initialState: INITIAL_STATE,
  reducers: {
    selectLesson(state, action) {
      const newModule = action.payload.module;
      const newModuleIndex = action.payload.moduleIndex;
      const newLesson = action.payload.lesson;
      const newLessonIndex = action.payload.lessonIndex;

      // Index do activeModule
      state.activeModule = { ...newModule, moduleIndex: newModuleIndex };
      // Index do activeLesson
      state.activeLesson = { ...newLesson, lessonIndex: newLessonIndex };

      // Status do activelesson
      if (state.activeLesson.status !== 'watched') {
        state.activeLesson.status = 'visualized';
      }

      // Status do modules>lesson
      state.modules[state.activeModule.moduleIndex]
        .lessons[state.activeLesson.lessonIndex].status = state.activeLesson.status;

      // OBS1: Proibido - pode mutar o valor do state mas nao adicionar novo
      // state.activeModule = action.payload.module;
      // state.activeModule.moduleIndex = action.payload.moduleIndex;

      // OBS2: Não pode alterar o action
    },
    videoEnded(state, action) {
      const moduleIndex = action.payload.activeModule.moduleIndex;
      const lessonIndex = action.payload.activeLesson.lessonIndex;
      
      state.modules[moduleIndex].lessons[lessonIndex].status = 'watched';

      const nextLessonInModule = state.modules[moduleIndex].lessons[lessonIndex + 1];
      
      if (nextLessonInModule) {
        nextLessonInModule.lessonIndex = state.activeLesson.lessonIndex + 1; // O evento não manda o indice: update do state
    
        state.activeLesson = nextLessonInModule; // Atualizar a lesson acabada
        nextLessonInModule.status = 'visualized' // Atualizar o status da lesson atual
      } else {
        if (state.modules.length === moduleIndex + 1) { // ultimo video nao precisa passar para o proximo
          return state;
        }

        const nextModule = state.modules[moduleIndex + 1];
        const firstLessonInNextModule = state.modules[moduleIndex + 1].lessons[0];

        firstLessonInNextModule.lessonIndex = 0;
        nextModule.moduleIndex = state.activeModule.moduleIndex + 1; // O evento não manda o indice: update do state

        state.activeLesson = firstLessonInNextModule; // Atualizar a lesson
        state.activeModule = nextModule; // Atualizar o module
        firstLessonInNextModule.status = 'visualized' // Atualizar o status da lesson atual
      }
    },
    toggleModule(state, action) {
      const moduleIndex = action.payload.moduleIndex;

      state.modules[moduleIndex].isExpanded = !state.modules[moduleIndex].isExpanded;
    }
  }
})

export const { selectLesson, videoEnded, toggleModule } = mediaSlice.actions;

export default mediaSlice.reducer;