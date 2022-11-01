import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarItem.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function NavbarItem({ title, to }) {
    return (
        <NavLink
            className={(nav) => cx('navbar-item', { active: nav.isActive })}
            to={to}
        >
            {title}
        </NavLink>
    );
}
