import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    // Dashboard Routes
    {
      path: 'dashboard',
      element: <DashboardLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/statics" replace /> },
        { path: 'statics', element: <PageOne /> },
        { path: 'config', element: <PageTwo /> },
        {
          path: 'app',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/app/categories" replace />
            },
            { path: 'categories', element: <PageCategoryList /> },
            { path: 'brands', element: <PageBrandList /> },
            { path: 'discounts', element: <PageDiscountList /> },
            {
              path: 'products',
              children: [
                { path: '/', element: <Navigate to="/dashboard/products/list" replace /> },
                { path: 'list', element: <PageProductList /> },
                { path: 'create', element: <PageProduct /> },
                { path: ':name/edit', element: <PageProduct /> }
              ]
            },
            {
              path: 'users',
              children: [
                { path: '/', element: <Navigate to="/dashboard/users/user_list" replace /> },
                { path: 'user_list', element: <PageUserList /> },
                { path: 'employee_list', element: <PageEmployeeList /> }
              ]
            },
            { path: 'setting', element: <PageAccountSetting /> },
            { path: 'profile', element: <PageProfileUser /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [{ path: '/', element: <LandingPage /> }]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Dashboard
const PageOne = Loadable(lazy(() => import('../pages/PageOne')));
const PageTwo = Loadable(lazy(() => import('../pages/PageTwo')));
// Category
const PageCategoryList = Loadable(lazy(() => import('../pages/dashboard/categories/PageCategoryList')));
// Brand
const PageBrandList = Loadable(lazy(() => import('../pages/dashboard/brands/PageBrandList')));
// Discount
const PageDiscountList = Loadable(lazy(() => import('../pages/dashboard/discounts/PageDiscountList')));
// Product
const PageProductList = Loadable(lazy(() => import('../pages/dashboard/products/PageProductList')));
const PageProduct = Loadable(lazy(() => import('../pages/dashboard/products/PageProduct')));
// User
const PageUserList = Loadable(lazy(() => import('../pages/dashboard/users/PageUserList')));
const PageEmployeeList = Loadable(lazy(() => import('../pages/dashboard/users/PageEmployeeList')));
const PageAccountSetting = Loadable(lazy(() => import('../pages/dashboard/users/PageAccountSetting')));
const PageProfileUser = Loadable(lazy(() => import('../pages/dashboard/users/PageProfileUser')));
// General
const NotFound = Loadable(lazy(() => import('../pages/Page404')));

// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
