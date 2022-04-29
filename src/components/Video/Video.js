import React from 'react';
import YouTubePlayer from 'react-player/youtube';

import { connect } from 'react-redux';

import './Video.css'

import { videoEnded } from '../../store/actions'

const Video = ({ activeModule, activeLesson, dispatch }) => {
  
  return ( 
    <div className='video-container'>

      <div className='video-container__video-header'>
        <p>
          <strong>Modulo: {activeModule.title}</strong>
          <span>/&nbsp;Aula: {activeLesson.title}</span>
        </p>
      </div>

      <div className='video-container__video-area'>
        <YouTubePlayer
          url={activeLesson.source}
          controls
          playing
          height={'100%'}
          width={'100%'}
          className='video'
          onEnded={() => dispatch(videoEnded(activeModule, activeLesson))}
      />
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

