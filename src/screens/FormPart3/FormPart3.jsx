import React from "react";
import photo from "../../photo.jpg";
import Button from "../../components/Button/Button";
import css from './FormPart3.module.css';
import { Link } from "react-router-dom";
import Back from "../../components/Back/Back";

const FormPart3 = () => {
    return (
        <div className={css.base_container}>
            <Back to='/formPart2'/>
            <div className={css.header}>Подтвердите свою личность</div>
            <div className={css.content}>
                <div>
                    <img className={css.image} src={photo} alt="nophoto" />
                </div>
                <label>Операция завершена успешно</label>
                <Button to='/success'>Далее</Button>
                <Link>Сфотографироваться заново</Link>
            </div>
        </div>
    )
}

export default FormPart3;