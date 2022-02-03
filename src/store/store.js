import { createStore } from "redux";

const INITIAL_STATE = {
  activeModule: {},
  activeLesson: {},
  modules: [
    {
      id: 1,
      title: 'Iniciando com React',
      lessons: [
        { id: 1, title: 'Criando componentes' },
        { id: 2, title: 'Componentes de Classe X de Função' },
        { id: 3, title: 'Composição de Componentes' },
        { id: 4, title: 'Hook useState' },
        { id: 5, title: 'Hook useEffect' },
        { id: 6, title: 'Hook useParams' },
        { id: 7, title: 'Roteamento' },
        { id: 8, title: 'Bibliotecas: react-icons, axios' }
      ]
    },
    {
      id: 2, title: 'Aprendendo Redux',
      lessons: [
        { id: 9, title: 'Connect' },
        { id: 10, title: 'createStore' },
        { id: 11, title: 'Reducer' },
        { id: 12, title: 'Provider' },
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