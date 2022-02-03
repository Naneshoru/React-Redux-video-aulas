import React from 'react';

import { connect } from 'react-redux';

import './Video.css'

const Video = ({ activeModule, activeLesson }) => {
  return ( 
    <div className='video-container'>
      <strong>Modulo: {activeModule.title}</strong>
      <span>/&nbsp;Aula: {activeLesson.title}</span>
    </div>
  );
}
 
export default connect(state => ({ 
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video);

