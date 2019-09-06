import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const components = { span: 'span', Link }

const Badge = ({ type, size, pill, className, children, element, ...other }) => {
    const Element = components[element] || components.span;

    return (
        <Element className={classnames('badge', className, {
            ['badge-' + size]: !!size,
            ['badge-' + type]: !!type,
            'badge-pill': pill
        })}
            {...other}
        >
            {children}
        </Element>
    );
}

export default Badge;