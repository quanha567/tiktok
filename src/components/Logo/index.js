import React from 'react';
import classNames from 'classnames/bind';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Logo({ src }) {
    return (
        <Link to="/" className={cx('logo-link')}>
            <img src={src} alt="Logo" className={cx('logo')} />
        </Link>
    );
}
