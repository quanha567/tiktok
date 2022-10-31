import classNames from 'classnames/bind';
import Logo from '~/components/Logo';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Home from '~/pages/Home';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Logo src="https://static-cse.canva.com/_next/static/assets/logo_w2000xh641_3b021976d60d0277e95febf805ad9fe8c7d6d54f86969ec03b83299084b7cb93.png" />
                <div className={cx('header-navbar')}>
                    <ul className={cx('navbar-list')}>
                        <li className={cx('navbar-items', 'active')}>
                            <Link to="/">Trang chủ</Link>
                        </li>
                        <li className={cx('navbar-items')}>
                            <Link to="/following">Khóa học</Link>
                        </li>
                        <li className={cx('navbar-items')}>
                            <Link to="/upload">Giới thiệu</Link>
                        </li>
                    </ul>
                    <div className={cx('navbar-control')}>
                        <button className={cx('btn', 'btn--outline')}>Đăng ký</button>
                        <button className={cx('btn', 'btn--gradient')}>Đăng nhập</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
