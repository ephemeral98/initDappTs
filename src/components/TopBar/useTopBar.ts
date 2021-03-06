import { reactive, readonly } from 'vue';

export interface IMemu {
  id: number;
  name: string;
  logo: any;
  urlName: string;
  active: boolean;
}

// 菜单列表
const menuListValue = reactive<IMemu[]>([
  {
    id: 1,
    name: 'topBar.1',
    logo: require('@img/holder.png'),
    urlName: 'home',
    active: false,
  },
  {
    id: 2,
    name: 'topBar.2',
    logo: require('@img/holder.png'),
    urlName: 'testPage',
    active: false,
  },
]);

/**
 * 修改菜单
 * @param menuItem 菜单项
 */
export function setMenuList(menuItem) {
  menuListValue.forEach((item) => {
    if (menuItem.id === item.id) {
      item = menuItem;
    }
  });
}

export const menuList = readonly(menuListValue);
