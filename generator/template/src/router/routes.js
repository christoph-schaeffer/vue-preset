import Home from '@/views/Home';
import About from '@/views/About';

export const root = {
  path: '/',
  redirect: '/Home',
};
export const home = {
  path: '/Home',
  name: 'Home',
  component: Home,
  navigationConfig: {
    icon: 'mdi-view-home-outline',
  },
};
export const about = {
  path: '/About',
  name: 'About',
  component: About,
  navigationConfig: {
    icon: 'mdi-view-information-outline',
  },
};

export default [
  root,
  home,
  about,
];
