import Sidebar from './components/Sidebar/Sidebar';
import Video from './components/Video/Video';

import './App.css';
import { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {

  render () {
    return (
      <div className="App">
          <Provider store={store}>
            <Video />
            <Sidebar />
          </Provider>
      </div>
    )
  } 
  
}

export default App;
