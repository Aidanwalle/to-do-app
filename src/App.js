// Блок импорта -----------------------------------------
// Библиотеки
import React from 'react';
import { Routes, Route } from 'react-router-dom'

// Функции, компоненты и переменные
import Header from './Components/Header/Header';
import Timer from './Components/Timer/Timer';
import Tasks from './Components/Tasks/Tasks';

import { taskList } from './Temp/TaskList2'

// Стили и изображения
import './App.scss';
import './reset.css'
import NewTask from './Components/NewTask/NewTask';

// Тело компонента ---------------------------------------
function App() {

  let today = new Date()
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  const [currentTaskList, setCurrentTaskList] = React.useState(taskList)
  const [avaibleTasks, setAvaibleTasks] = React.useState(taskList)
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [avaibleTime, setAvaibleTime] = React.useState(0)

  function deleteTask(taskId) {
    setCurrentTaskList(currentTaskList.filter(obj => obj.id !== taskId))
  }

  function deleteAvaibleTask(taskId) {
    setAvaibleTasks(avaibleTasks.filter(obj => obj.id !== taskId))
  }

  const increaseHours = () => {
    if (hours < 23) {
      setHours(hours + 1)
    } else (
      setHours(0)
    )
  }

  const increaseMinutes = () => {
    if (minutes < 55) {
      setMinutes(minutes + 5)
    } else {
      setMinutes(0)
      setHours(hours + 1)
    }
  }

  const resetClock = () => {
    setMinutes(0)
    setHours(0)
  }

  React.useEffect(() => {
    setAvaibleTime(hours * 60 + minutes)
    setAvaibleTasks(taskList)
    setAvaibleTasks(prevArray => prevArray.filter(obj => obj.time <= avaibleTime))
  }, [hours, minutes, avaibleTime])

  return (
    <div className='App adaptive'>
      <Header className='header' today={today} options={options} />
      <div className='main'>
        <Routes>
          <Route path='/' element={
            <Timer
              hours={hours}
              minutes={minutes}
              avaibleTime={avaibleTime}
              increaseHours={increaseHours}
              increaseMinutes={increaseMinutes}
              avaibleTasks={avaibleTasks}
              resetClock={resetClock}
              currentTaskList={currentTaskList}
              deleteTask={deleteAvaibleTask}
            />
          } />
          <Route path='/tasks' element={
            <Tasks
              currentTaskList={currentTaskList}
              deleteTask={deleteTask}
            />} />
          <Route path='/new-task' element={
            <NewTask
              currentTaskList={currentTaskList}
              setCurrentTaskList={setCurrentTaskList}
            />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
