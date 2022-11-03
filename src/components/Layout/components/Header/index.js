import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import Logo from '~/components/Logo';
import Button from '~/components/Button';
import NavbarList, { NavbarItem } from '~/components/Navbar';
import { publicRoutes } from '~/routes';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Logo src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" />
                <div className={cx('header-navbar')}>
                    <NavbarList className={cx('navbar-list')}>
                        {publicRoutes.map((route, index) => (
                            <NavbarItem
                                key={index}
                                to={route.path}
                                title={route.title}
                                icon={route.icon}
                            />
                        ))}
                    </NavbarList>
                    <div className={cx('navbar-control')}>
                        {/* <Button title="Đăng ký" outline /> */}
                        <Button title="Đăng nhập" gradient />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
