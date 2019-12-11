
export default [
    // {
    //     path: '/',
    //     meta: {title: '泰乐学院'},
    //     component: () => import('../../layouts/TlcLayout.vue'),
    //     children: [
    //         {path: '', meta: {title: '泰乐学院'}, component: () => import('../../views/EDU/home/index.vue')}
    //     ]
    // },
    {
        path: '*',
        meta: {title: '首页'},
        component: () => import('../../views/ESRI/index/index.vue'),
    }
]
