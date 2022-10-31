import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home, layout: HeaderOnly },
    { path: '/following', component: Following, layout: HeaderOnly },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

//require login to view content
const privateRoutes = [];

export { publicRoutes, privateRoutes };
