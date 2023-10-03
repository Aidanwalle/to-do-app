import React from 'react'
import Task from '../Tasks/Task/Task'
import Tasks from '../Tasks/Tasks'

import s from './Timer.module.scss'

const Timer = ({ hours, minutes, avaibleTime, increaseHours, increaseMinutes, avaibleTasks, resetClock, deleteTask, currentTaskList }) => {

    return (
        <div className={s.wrapper}>
            <div className={s.clock}>
                <h1><span onClick={increaseHours}>{hours}</span>ч <span onClick={increaseMinutes}>{minutes}</span>м</h1>
                {avaibleTime ? <button onClick={resetClock}><p>Обнулить счетчик</p></button> : <p>Измените доступное время нажав на минуты или часы</p>
                }
            </div>
            <div className={s.tasks}>
                {avaibleTasks.length
                    ? avaibleTasks.map((task) => {
                        return <Task task={task} deleteTask={deleteTask} key={task.id} />
                    })
                    : <p className={s.emptyTaskListNotification}>Нет подходящих задач</p>
                }
            </div>
        </div>
    )
}

export default Timer