import React from 'react';
import s from './NewTask.module.scss';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import hourglassIconDark from '../../Assets/icons/hourglass-dark.png';

const NewTask = ({ currentTaskList, setCurrentTaskList }) => {
  const { register, handleSubmit } = useForm({ mode: 'onSubmit' });
  const [inputValue, setInputValue] = React.useState('');
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(currentTaskList);
    setCurrentTaskList([
      ...currentTaskList,
      {
        id: currentTaskList.length,
        description: data.task,
        time: Number(data.hours) * 60 + Number(data.minutes),
        priority: 3,
      },
    ]);
    navigate('/tasks');
    console.log(currentTaskList);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.sectionName}>
        <h1>Новая задача</h1>
      </div>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.timeInputsWrapper}>
          <p>Время на выполнение</p>
          <div className={s.timeInputsBlock}>
            <img src={hourglassIconDark} alt="Время на выполнение" />
            <input {...register('hours')} placeholder="0" type="number" min="0"/>
            <p>ч</p>
            <input
              {...register('minutes')}
              placeholder="15"
              type="number"
              min="0"
              max="55"
              step="5"
              required
            />
            <p>мин</p>
          </div>
        </div>
        <textarea
          {...register('task')}
          required
          className={s.taskInputArea}
          placeholder="Добавить новую задачу"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className={s.submitButton}>
          Добавить
        </button>
      </form>
    </div>
  );
};

export default NewTask;
