import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

export default function NavbarItem({ title, to, icon }) {
    return (
        <NavLink
            to={to}
            end
            className={(nav) => cx('navbar-item', { active: nav.isActive })}
        >
            <span>{title}</span>
        </NavLink>
    );
}
