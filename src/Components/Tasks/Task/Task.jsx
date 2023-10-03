import s from './Task.module.scss'

import deleteIconDark from '../../../Assets/icons/delete-dark.png'
import hourglassIconDark from '../../../Assets/icons/hourglass-dark.png'

const Task = ({ task, deleteTask }) => {

    let timer = task.time > 59 ? `${Math.floor(task.time / 60)} ч ${task.time % 60} мин.` : `${task.time} мин.`

    return (
        <div className={s.task}>
            <aside>
                <img src={hourglassIconDark} alt='Время на выполнение' />
                <p><span>{timer}</span></p>
            </aside>
            <main>
                <p>{task.description.slice(0, 55)}</p>
            </main>
            <aside className={s.asideButtons}>
                <button onClick={() => deleteTask(task.id)}>
                    <img src={deleteIconDark} alt='Удалить задачу' />
                </button>
            </aside>
        </div>
    )
}

export default Task