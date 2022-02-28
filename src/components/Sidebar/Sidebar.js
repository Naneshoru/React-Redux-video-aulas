import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';
import CircleIcon from '@mui/icons-material/Circle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Sidebar = ({ modules, dispatch }) => {

  function toggleLesson(module, lesson) {
    return {
      type: 'TOGGLE_LESSON',
      module,
      lesson
    }
  }

  let lessonsSize = 0;

  useEffect(() => {
    const getLessonsSize = () => {
      modules.forEach((module) => {
        module.lessons.forEach((lesson) => {
          lessonsSize++;
        })
      })
    }
    getLessonsSize();
  }, [modules, lessonsSize])

  const [lessonsStatus, setLessonsStatus] = useState(Array(lessonsSize).fill(''));

  const updateCheckedArray = (value, index) => {
    let newArray = [...lessonsStatus];
    newArray[index] = value;
    setLessonsStatus(newArray);
  }


  return ( 
    <div className='sidebar-container'>
      <aside>
        { modules.map((module) => (
          <div key={module.id}>
            <p><strong>{module.title}</strong></p>
            <ul className='sidebar__line'>
              { module.lessons.map((lesson, i) => (
                <li 
                  key={lesson.id} 
                  onClick={() => { 
                    dispatch(toggleLesson(module, lesson)); 
                    updateCheckedArray('visualized', i)
                  }}
                  className='sidebar__line-item'
                >
                  {!lessonsStatus[i] && <div><CircleIcon /></div>}
                  {lessonsStatus[i] === 'visualized' && <div><VisibilityIcon /></div>}
                  {lessonsStatus[i] === 'watched' && <div><CheckCircleIcon /></div>}
                  <div><span>{lesson.title}</span></div>
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