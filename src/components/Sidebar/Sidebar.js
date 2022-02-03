import React from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';

const Sidebar = ({ modules, dispatch }) => {

  function toggleLesson(module, lesson) {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
    }
  }

  return ( 
    <div className='sidebar-container'>
      <aside>
        { modules.map((module) => (
          <div key={module.id}>
            <p><strong>{module.title}</strong></p>
            <ul className='sidebar__line'>
              { module.lessons.map((lesson) => (
                <li 
                  key={lesson.id} 
                  onClick={() => dispatch(toggleLesson(module, lesson))}
                  className='sidebar__line-item'
                >
                  {lesson.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>

    </div>

  );
}
 
export default connect(state => ({ modules: state.modules }))(Sidebar)