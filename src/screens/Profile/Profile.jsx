import React from "react";
import Input from "../../components/Input/Input";
import css from './Profile.module.css';
import Back from '../../components/Back/Back';
import Select from "../../components/Select/Select";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className={css.base_container}>
            <Back to='/success'/>
            <div className={css.header}>Мои данные</div>
            <Link>Редактировать данные</Link>
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Input type='text' />
            <Select/>
            <Select/>
            <Link>Изменить пароль</Link>
        </div>
    )
}

export default Profile;