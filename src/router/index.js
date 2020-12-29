import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home');
const HomePage = () => import('views/homePage/HomePage');
const UserInformation = () => import('components/userInformation/UserInformation');
const UserOptions = () => import('components/userOptions/UserOptions');
const BookSales = () => import('components/bookSales/BookSales');
const BooksQuery = () => import('components/booksQuery/BooksQuery');
const BookManagement = () => import('components/bookManagement/BookManagement');
const DayOrderManagement = () => import('components/dayOrderManagement/DayOrderManagement');
const MonthOrderManagement = () => import('components/monthOrderManagement/MonthOrderManagement');
const ActivityCenter = () => import('components/activityCenter/ActivityCenter');
const ChannelCenter = () => import('components/channelCenter/ChannelCenter');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    meta: { title: '登录' },
  },
  {
    path: '/homePage',
    component: HomePage,
    meta: { title: '鸿运书店后台管理' },
    children: [
      {
        path: '/homePage',
        redirect: '/homePage/bookSales',
      },
      {
        path: '/homePage/userInformation',
        component: UserInformation,
        name: 'UserInformation',
        meta: { title: '用户资料' },
      },
      {
        path: '/homePage/userOptions',
        component: UserOptions,
        name: 'UserOptions',
        meta: { title: '用户选项' },
      },
      {
        path: '/homePage/bookSales',
        component: BookSales,
        name: 'BookSales',
        meta: { title: '鸿运书店销售数据' },
      },
      {
        path: '/homePage/booksQuery',
        component: BooksQuery,
        name: 'BooksQuery',
        meta: { title: '鸿运书店书籍查询' },
      },
      {
        path: '/homePage/bookManagement',
        component: BookManagement,
        name: 'BookManagement',
        meta: { title: '鸿运书店书籍管理' },
      },
      {
        path: '/homePage/dayOrderManagement',
        component: DayOrderManagement,
        name: 'DayOrderManagement',
        meta: { title: '鸿运书店日订单管理' },
      },
      {
        path: '/homePage/monthOrderManagement',
        component: MonthOrderManagement,
        name: 'MonthOrderManagement',
        meta: { title: '鸿运书店月订单管理' },
      },
      {
        path: '/homePage/activityCenter',
        component: ActivityCenter,
        name: 'ActivityCenter',
        meta: { title: '鸿运书店活动中心' },
      },
      {
        path: '/homePage/channelCenter',
        component: ChannelCenter,
        name: 'ChannelCenter',
        meta: { title: '鸿运书店渠道中心' },
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
