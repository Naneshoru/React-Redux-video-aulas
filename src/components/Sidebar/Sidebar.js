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

  let statusMatrix = []; // [m][l] = (m) modules X (l) lessons

  useEffect(() => {
    const createLessonsStatusMatrix = () => {
      modules.forEach((module, m) => {
        statusMatrix[m] = [];
        module.lessons.forEach((lesson, l) => {
          statusMatrix[m][l] = '';
        })
      })
    }
    createLessonsStatusMatrix();
    console.log(statusMatrix)
  }, [])

  const [lessonsStatus, setLessonsStatus] = useState(statusMatrix);

  const updateMatrix = (value, m, l) => {
    let newMatrix = lessonsStatus.map((arr) => arr.slice()); // cópia da matrix
    newMatrix[m][l] = value;
    setLessonsStatus(newMatrix);
  }

  return ( 
    <div className='sidebar-container'>
      <aside>
        { modules.map((module, m) => (
          <div key={module.id}>
            <p><strong>{module.title}</strong></p>
            <ul className='sidebar__line'>
              { module.lessons.map((lesson, l) => (
                <li 
                  key={lesson.id} 
                  onClick={() => { 
                    dispatch(toggleLesson(module, lesson)); 
                    updateMatrix('visualized', m, l)
                  }}
                  className='sidebar__line-item'
                >
                  {lessonsStatus[m] && lessonsStatus[m][l] === 'visualized' && <div><VisibilityIcon /></div>}
                  {lessonsStatus[m] && lessonsStatus[m][l] === 'watched' && <div><CheckCircleIcon /></div>}
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