import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import css from './Enter.module.css';
import Back from '../../components/Back/Back';

const Enter = () => {
    return (
        <div className={css.base_container}>
            <Back to='/'/>
            <div className={css.header}>Войти</div>
            <div className={css.content}>
                <label>Телефон/Email</label>
                <Input type='text'/>
                <label>Пароль</label>
                <Input type='password'/>
                <Link>Забыли пароль?</Link>
                <Button to='/formPart1'>Далее</Button>
            </div>
        </div>
    )
}

export default Enter;