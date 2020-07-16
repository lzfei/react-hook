import Home from '../pages/home'
import User from '../pages/system/user'
import Menu from '../pages/system/menu'
import {
  SettingOutlined,
  HomeOutlined
} from '@ant-design/icons';

let router = [
  {
    path: '/',
    name: '首页',
    icon: HomeOutlined,
    hideInMenu: false,
    component: Home
  },
  {
    path: '/system',
    name: '系统管理',
    icon: SettingOutlined,
    hideInMenu: false,
    children: [
      {
        path: '/system/user',
        name: '用户管理',
        hideInMenu: false,
        component: User
      },
      {
        path: '/system/menu',
        name: '菜单管理',
        hideInMenu: false,
        component: Menu
      }
    ]
  }
]
export default router