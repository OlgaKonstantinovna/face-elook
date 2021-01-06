import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import css from './FormPart1.module.css';
import Back from '../../components/Back/Back';
import Select from "../../components/Select/Select";

const Enter = () => {
    return (
        <div className={css.base_container}>
            <Back to='/enter'/>
            <div className={css.header}>Заполните анкету</div>
            <Input type='text' valid/>
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Select/>
            <Select/>
            <Button to='/formPart2'>Далее</Button>
        </div>
    )
}

export default Enter;