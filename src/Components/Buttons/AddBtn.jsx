import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ReactLogo } from '../../Assets/icons/addBtn.svg'
import s from './AddBtn.module.scss'

const AddBtn = () => {
    return (
        <div onClick={() => (console.log())} className={s.addBtnWrapper}>
            <NavLink to='/new-task'>
                <ReactLogo />
            </NavLink>
        </div>
    )
}

export default AddBtn