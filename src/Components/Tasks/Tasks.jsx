import React from 'react'
import Task from './Task/Task'
import AddBtn from '../Buttons/AddBtn'
import classNames from 'classnames'

import s from './Tasks.module.scss'

const Tasks = ({ currentTaskList, deleteTask }) => {

    return (
        <div className={s.wrapper}>
            <div className={classNames(s.sectionName, s.adaptive)}>

                <h1>{`Список задач ${currentTaskList.length ? ' ' : 'пуст'}`}</h1>
            </div>
            <div className={s.tasks}>
                {currentTaskList.map((task) => {
                    return <Task task={task} key={task.id} deleteTask={deleteTask} />
                })
                }
            </div>
            <AddBtn />
        </div>
    )
}

export default Tasks