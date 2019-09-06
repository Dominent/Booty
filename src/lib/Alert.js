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

const Alert = ({ type, className, children, dismissible, onClose, ...other }) => {
    return (
        <div
            className={classnames('alert', 'alert-' + type, className, {
                'alert-dismissible': dismissible
            })}
            {...other}
        >
            {dismissible && <CloseBtn onClose={onClose}></CloseBtn>}
            {children}
        </div>
    );
}

Alert.Link = ({ className, children, ...other }) => {
    return (
        <Link className={classnames('alert-link', className)}
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