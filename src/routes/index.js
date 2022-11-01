import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly, title: 'Trang chủ' },
    {
        path: '/following',
        component: Following,
        layout: HeaderOnly,
        title: 'Khóa học',
    },
    {
        path: '/about',
        component: Upload,
        layout: HeaderOnly,
        title: 'Giới thiệu',
    },
];

//require login to view content
const privateRoutes = [];

export { publicRoutes, privateRoutes };
