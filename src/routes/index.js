import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: HeaderOnly,
        title: 'Trang chủ',
        icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
    },
    {
        path: '/following',
        component: Following,
        layout: HeaderOnly,
        title: 'Khóa học',
        icon: <FontAwesomeIcon icon="fa-solid fa-book" />,
    },
    {
        path: '/about',
        component: Upload,
        layout: HeaderOnly,
        title: 'Giới thiệu',
        icon: <FontAwesomeIcon icon="fa-solid fa-address-card" />,
    },
];

//require login to view content
const privateRoutes = [];

export { publicRoutes, privateRoutes };
