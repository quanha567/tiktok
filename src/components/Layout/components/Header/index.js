import classNames from 'classnames/bind';

import Logo from '~/components/Logo';
import NavbarItem from '~/components/NavbarItem';
import styles from './Header.module.scss';
import { publicRoutes } from '~/routes';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Logo src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" />
                <div className={cx('header-navbar')}>
                    <div className={cx('navbar-list')}>
                        {publicRoutes.map((route, index) => (
                            <NavbarItem
                                key={index}
                                to={route.path}
                                title={route.title}
                            />
                        ))}
                    </div>
                    <div className={cx('navbar-control')}>
                        <Button title="Đăng ký" outline/>
                        <Button title="Đăng nhập" gradient/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
