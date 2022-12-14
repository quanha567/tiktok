import React from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button({ title, outline, gradient }) {
    return (
        <button
            className={cx(
                'btn',
                { 'btn--outline': outline },
                { 'btn--gradient': gradient },
            )}
        >
            {title}
        </button>
    );
}
