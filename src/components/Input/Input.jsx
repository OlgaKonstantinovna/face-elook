import React from "react";
import css from './Input.module.css';
import ValidIcon from "../../valid.svg";

const Input = ({ type = "text", value = "", valid }) => {
    return (
        <div className={css.input_container}>
            <input className={css.input} type={type} value={value} />
            {
                valid && (
                    <img className={css.validIcon} src={ValidIcon} alt="valid" />)
            }
        </div>
    )
}

export default Input;