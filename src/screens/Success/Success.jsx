import React from "react";
import ok from "../../ok.svg";
import Button from "../../components/Button/Button";
import css from './Success.module.css';
import { Link } from "react-router-dom";
import Back from "../../components/Back/Back";

const Success = () => {
    return (
        <div className={css.base_container}>
            <Back to='/formPart3'/>
            <div className={css.header}>Анкета успешно заполнена</div>
            <div className={css.content}>
                <div>
                    <img className={css.image} src={ok} alt="ok" />
                </div>
                <label>Необходимо подтвердить номер телефона</label>
                <label>Изменить информацию можно во вкладке "Настройки"</label>
                <Button to='/profile'>Далее</Button>
                <Link>Сфотографироваться заново</Link>
            </div>
        </div>
    )
}

export default Success;