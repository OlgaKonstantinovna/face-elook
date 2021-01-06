import React from "react";
import photo from "../../photo.jpg";
import Button from "../../components/Button/Button";
import css from './FormPart2.module.css';
import { Link } from "react-router-dom";
import Back from "../../components/Back/Back";

const FormPart2 = () => {
    return (
        <div className={css.base_container}>
            <Back to='/formPart1'/>
            <div className={css.header}>Подтвердите свою личность</div>
            <div className={css.content}>
                <div>
                    <img className={css.image} src={photo} alt="nophoto" />
                </div>
                <div className={css.log_in_with}>
                    <Button to='/'>Выбрать фото из Галереи</Button>
                    <Button to='/'>Сделать фото</Button>
                </div>
                <Button to='/formPart3'>Далее</Button>
            </div>
        </div>
    )
}

export default FormPart2;