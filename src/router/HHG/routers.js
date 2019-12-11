export default [
    {
        path: '*',
        meta: {title: '登录'},
        component: () => import('../../views/HHG/login/index.vue'),
    },
    {
        path: '/notice',
        meta: {title: '通知'},
        component: () => import('../../layouts/HHG/HhgLayout.vue'),
        children: [
            {path: '', meta: {title: '通知'}, component: () => import('../../views/HHG/notice/index.vue')}
        ]
    },
    {
        path: '/ndetail/:id',
        meta: {title: '通知详情'},
        component: () => import('../../layouts/HHG/HhgLayout.vue'),
        children: [
            {path: '', meta: {title: '通知详情'}, component: () => import('../../views/HHG/notice/detail.vue')}
        ]
    },
    {
        path: '/menus',
        meta: {title: '菜单'},
        component: () => import('../../layouts/HHG/HhgLayout.vue'),
        children: [
            {path: '', meta: {title: '菜单'}, component: () => import('../../views/HHG/menus/index.vue')}]
    },
    {
        path: '/user',
        meta: {title: '个人中心'},
        component: () => import('../../layouts/HHG/HhgLayout.vue'),
        children: [
            {path: '', meta: {title: '个人中心'}, component: () => import('../../views/HHG/user/index.vue')}]
    },
    {
        path: '/userCode/:id',
        meta: {title: '我的二维码'},
        component: () => import('../../views/HHG/user/userCode.vue'),
    },
    {
        path: '/userInfo/:id',
        meta: {title: '个人资料'},
        component: () => import('../../views/HHG/user/userInfo.vue'),
    },
    {
        path: '/app',
        meta: {title: 'APP下载'},
        component: () => import('../../views/HHG/download/index.vue'),
    }
]
