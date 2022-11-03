import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';

const cx = classNames.bind(styles);

export default function Navbar({ children }) {
    return <nav className={cx('navbar-list')}>{children}</nav>;
}
