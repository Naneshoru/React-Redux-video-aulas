import React from 'react';
import './Sidebar.css';
import { ArrowDropDown, ArrowDropUp, CheckCircle, Visibility }  from '@mui/icons-material/';
import { useDispatch, useSelector } from 'react-redux'
import { selectLesson, toggleModule } from '../../store/media';

const Sidebar = () => {

  const isActive = (id) => {
    return id === activeLesson.id ? 'active' : ''
  } 

  const { modules, activeLesson } = useSelector(state => state.media);
  console.log(modules)

  const dispatch  = useDispatch();

  return ( 
    
    <div className='sidebar-container scrollbar'>
      <aside>
        { modules.map((module, moduleIndex) => (
          <div key={module.id}>
            <div className='sidebar__title' onClick={() => { dispatch(toggleModule({ moduleIndex })) }}>
              <p className='sidebar__title-text'><strong>{ module.title }</strong></p>
              { module.isExpanded ? 
                <ArrowDropUp  className='sidebar__title-icon' /> :
                <ArrowDropDown  className='sidebar__title-icon' />
              }
            </div>
            <div className={`sidebar__item ${module.isExpanded && 'fade-in'}`}>
              { module.isExpanded && module.lessons.map((lesson, lessonIndex) => (
                <button 
                  key={lesson.id} 
                  onClick={() => { dispatch(selectLesson({ module, lesson, moduleIndex, lessonIndex })) }}
                  className={'sidebar__item-btn ' + isActive(lesson.id)}
                >
                  {lesson.title}
                  {lesson.status === 'visualized' && <div className='sidebar__item-icon sidebar__item--visualized'><Visibility /></div>}
                  {lesson.status === 'watched' && <div className='sidebar__item-icon sidebar__item--watched'><CheckCircle /></div>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}

export default Sidebar;