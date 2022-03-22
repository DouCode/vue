const userRoutes = [
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register/Register.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {
            auth: true,
        },
        component: () => import('@/views/profile/Profile.vue'),
    },
    {
        path: '/posts',
        name: 'post',
        meta: {
            auth: true,
        },
        component: () => import('@/views/post/Post.vue'),
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article/Article.vue'),
    },
];

export default userRoutes;
