import React from 'react';
import classnames from 'classnames';

const Button = ({ type, className, children, ...other }) => {
    return (
        <button
            type="button"
            className={classnames('btn', 'btn-' + type, className)}
            {...other}
        >
            {children}
        </button>
    );
}

Button.Group = ({ size, vertical, children, className, ...other }) => {
    return (
        <div className={classnames('btn-group', className, {
            ['btn-group-' + size]: !!size,
            'btn-group-vertical': !!vertical
        })}
            {...other}
        >
            {children}
        </div>
    )
}

Button.Toolbar = ({ children, className, ...other }) => {
    return (
        <div className={classnames('btn-toolabr', className)}
            {...other}
        >
            {children}
        </div>
    )
}

export default Button;