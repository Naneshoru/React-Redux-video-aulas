
export function selectLesson(module, lesson, moduleIndex, lessonIndex) {    
  return {
    type: 'SELECT_LESSON',
    module,
    lesson,
    moduleIndex,
    lessonIndex
  }
}

export function videoEnded(activeModule, activeLesson) {
  return {
    type: 'VIDEO_ENDED',
    activeLesson,
    activeModule
  }
}

export function toggleModule(moduleIndex) {
  return {
    type: 'TOGGLE_MODULE',
    moduleIndex
  }
}