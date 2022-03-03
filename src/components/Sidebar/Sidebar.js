import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Sidebar = ({ modules, dispatch }) => {
  const [selectedButton, setSelectedButton] = useState('');

  function toggleLesson(module, lesson, moduleIndex, lessonIndex) {    
    setSelectedButton(lesson.id);
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson,
      moduleIndex,
      lessonIndex
    }
  }

  const isActive = (id) => {
    return id === selectedButton ? 'active' : ''
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
 
export default connect(state => ({ modules: state.modules }))(Sidebar)