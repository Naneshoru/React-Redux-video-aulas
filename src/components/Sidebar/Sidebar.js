import React from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { toggleLesson } from '../../store/actions'

const Sidebar = ({ modules, activeLesson, dispatch }) => {

  const isActive = (id) => {
    return id === activeLesson.id ? 'active' : ''
  } 

  return ( 
    <div className='sidebar-container'>
      <aside>
        { modules.map((module, m) => (
          <div key={module.id}>
            <p className='title'><strong>{module.title}</strong></p>
            <div className='sidebar__line'>
              { module.lessons.map((lesson, l) => (
                <button 
                  key={lesson.id} 
                  onClick={() => { dispatch(toggleLesson(module, lesson, m, l)) }}
                  className={'sidebar__line-item ' + isActive(lesson.id)}
                >
                  {lesson.title}
                  {lesson.status === 'visualized' && <div className='icon visualized'><VisibilityIcon /></div>}
                  {lesson.status === 'watched' && <div className='icon watched'><CheckCircleIcon /></div>}
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