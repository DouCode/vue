/* eslint-disable */
import request from '@/utils/request';

// 用户注册
const register = ({ name, telephone, password, headimage }) => request.post('api/auth/register', { name, telephone, password, headimage });

// 用户登录
const login = ({ telephone, password }) => request.post('api/auth/login', { telephone, password });

// 获取用户信息
const info = () => request.get('api/auth/info');

// 用户发布
const posts = ({
    category_id, title, head_image, content,
}) => request.post('posts', {
    category_id, title, head_image, content,
});

export default {
    register,
    login,
    info,
    posts,
};
