import React from "react";
import tsu_logo from "../../tsu_logo.svg";
import Button from "../../components/Button/Button";
import css from './Enter_Fin.module.css';
import { Link } from "react-router-dom";

const EnterFin = () => {
    return (
        <div className={css.base_container}>
            <div className={css.header}>FaceElook</div>
            <div className={css.content}>
                <div className={css.image}>
                    <img src={tsu_logo} alt="tsu_logo" />
                </div>
                <Button to='/enter'>Войти</Button>
                <div><Link>Зарегистрироваться</Link></div>
                <div className={css.log_in_with}>
                    <div>
                        <Link>Войти по ТГУ.Аккаунты</Link>
                    </div>
                    <div>
                        <Link>Войти по Сбербанк ID</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterFin;