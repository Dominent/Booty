import React from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

const components = { span: 'span', Link: Link }

const Badge = ({ variant, size, pill, className, children, element, ...other }) => {
    const Element = components[element] || components.span;

    return (
        <Element className={classnames('badge', className, {
            ['badge-' + size]: !!size,
            ['badge-' + variant]: !!variant,
            'badge-pill': pill
        })}
            {...other}
        >
            {children}
        </Element>
    );
}

export default Badge;