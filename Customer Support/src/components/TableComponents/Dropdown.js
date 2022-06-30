import React from 'react';
import './Select.css';
import PropTypes from 'prop-types';
import { ReactComponent as DropDownLogo } from '../../assets/svg/message/dropdown.svg';

const Dropdown = ({ onChange, options }) => {
    const onClick = (e) => {
        onChange(e.target.id);
    }

    return (
        <div className="dropdown">
            <button className="dropbtn">Move to {" "}<DropDownLogo /></button>
            <div className="dropdown-content">
                {options.map(child => {
                    return (<a key={child} id={child} onClick={onClick}>{child}</a>);
                })}
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    onChange: PropTypes.func,
    options: PropTypes.array.isRequired
};

export default Dropdown;