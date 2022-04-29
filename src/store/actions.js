
export function toggleLesson(module, lesson, moduleIndex, lessonIndex) {    
  return {
    type: 'TOGGLE_LESSON',
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
