import React from 'react';
import classnames from 'classnames';

const Breadcrumb = ({ children, className, ...other }) => {
    return (
        <ol className={classnames('breadcrumb', className)}
            {...other}
        >
            {children}
        </ol>
    );
}

Breadcrumb.Item = ({ children, active, className, ...other }) => {
    return (
        <li className={classnames('breadcrumb-item', { active }, className)}
            {...other}
        >
            {children}
        </li>
    )
}

export default Breadcrumb;