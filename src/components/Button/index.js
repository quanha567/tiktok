import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button() {
    return <Button classNames={cx('button')}>Button</Button>;
}
