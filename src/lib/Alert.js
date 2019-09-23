import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom'

const CloseBtn = ({ onClose }) => {
    return (
        <button type="button" className="close" onClick={onClose}>
            <span>&times;</span>
        </button>
    )
}

const Alert = ({ variant, className, children, dismissible, onClose, ...other }) => {
    return (
        <div className={classnames('alert', className, {
            [`alert-${variant}`]: !!variant,
            'alert-dismissible': !!dismissible
        })} {...other} >
            {dismissible && <CloseBtn onClose={onClose}></CloseBtn>}
            {children}
        </div>
    );
}

Alert.Link = ({ to, className, children, ...other }) => {
    return (
        <Link to={to} className={classnames('alert-link', className)}
            {...other}
        >
            {children}
        </Link>
    );
}

Alert.Heading = ({ className, children, ...other }) => {
    return (
        <h4 className={classnames('alert-heading', className)}
            {...other}
        >
            {children}
        </h4>
    );
}

export default Alert;