import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import NotFound from '../pages/NotFound';
import RoutesLinks from './routes'; // Your array of route objects

const AppRoutes = () => {
  const styledRoutes = RoutesLinks.filter(route => route.enableStyle);
  const plainRoutes = RoutesLinks.filter(route => !route.enableStyle);

  return (
    <Routes>
      {/* Routes with MainLayout */}
      <Route element={<MainLayout />}>
        {styledRoutes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>

      {/* Routes without layout */}
      {plainRoutes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}

      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
