import React from 'react';
import YouTubePlayer from 'react-player/youtube';

import './Video.css'

import { useDispatch, useSelector } from 'react-redux'
import { videoEnded } from '../../store/media';

const Video = () => {
  
  const dispatch  = useDispatch();

  const { activeModule, activeLesson } = useSelector(state => state.media);
  
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
          onEnded={() => dispatch(videoEnded({ activeModule, activeLesson }))}
      />
      </div>
      <div className='video-container__video-side'></div>
      <div className='video-container__video-footer '>{activeLesson.description}</div>
    </div>
  );
}
 
export default Video;

