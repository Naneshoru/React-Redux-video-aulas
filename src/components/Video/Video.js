import React from 'react';

import { connect } from 'react-redux';

import './Video.css'

const Video = ({ activeModule, activeLesson }) => {
  return ( 
    <div className='video-container'>

      <div className='video-container__video-header'>
        <p>
          <strong>Modulo: {activeModule.title}</strong>
          <span>/&nbsp;Aula: {activeLesson.title}</span>
        </p>
      </div>

      <div className='video-container__video-area'>
        <video
          controls
          autoplay
          preload='metadata'
        >
        </video>
      </div>
      <div className='video-container__video-side'></div>
      <div className='video-container__video-footer '>{activeLesson.description}</div>
    </div>
  );
}
 
export default connect(state => ({ 
  activeModule: state.activeModule,
  activeLesson: state.activeLesson
}))(Video);

