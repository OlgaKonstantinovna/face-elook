import React from "react";
import css from './Select.module.css';

const Select = ({ value = "", options = [] }) => {
    return (
        <div className={css.select_container}>
            <select className={css.select}>
                {
                    options && (
                        options.map((item) =>
                            <option value={item} key={item}>{item}</option>
                        )
                    )
                }
            </select>
        </div>
    )
}

export default Select;