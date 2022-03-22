import request from '@/utils/request';

// 用户注册
const register = ({ name, telephone, password }) => {
    return request.post('api/auth/register', { name, telephone, password });
};

// 用户登录
const login = ({ telephone, password }) => {
    return request.post('api/auth/login', { telephone, password });
};

// 获取用户信息
const info = () => {
    return request.get('api/auth/info');
};

// 用户发布
const posts = ({
    category_id, title, head_image, content,
}) => {
    return request.post('posts', {
        category_id, title, head_image, content,
    });
};

export default {
    register,
    login,
    info,
    posts,
};
