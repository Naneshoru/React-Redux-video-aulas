import React from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';
import { ArrowDropDown, ArrowDropUp, CheckCircle, Visibility }  from '@mui/icons-material/';
import { selectLesson, toggleModule } from '../../store/actions'

const Sidebar = ({ modules, activeLesson, dispatch }) => {

  const isActive = (id) => {
    return id === activeLesson.id ? 'active' : ''
  } 

  return ( 
    <div className='sidebar-container scrollbar'>
      <aside>
        { modules.map((module, m) => (
          <div key={module.id}>
            <div className='title' onClick={() => { dispatch(toggleModule(m)) }}>
              <p className='title-text'><strong>{ module.title }</strong></p>
              { module.isExpanded ? 
                <ArrowDropUp  className='title-icon' /> :
                <ArrowDropDown  className='title-icon' />
              }
            </div>
            <div className='sidebar__line'>
              { module.isExpanded && module.lessons.map((lesson, l) => (
                <button 
                  key={lesson.id} 
                  onClick={() => { dispatch(selectLesson(module, lesson, m, l)) }}
                  className={'sidebar__line-item ' + isActive(lesson.id)}
                >
                  {lesson.title}
                  {lesson.status === 'visualized' && <div className='lesson-icon visualized'><Visibility /></div>}
                  {lesson.status === 'watched' && <div className='lesson-icon watched'><CheckCircle /></div>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
 
export default connect(state => ({ 
  modules: state.modules,
  activeLesson: state.activeLesson
}))(Sidebar)