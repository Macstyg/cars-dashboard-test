import EditCar from './pages/EditCar';
import Cars from './pages/Cars';
import CreateCar from './pages/CreateCar';

const routes = [
  {
    path: '/',
    component: Cars,
    exact: true,
  },
  {
    path: '/cars',
    component: Cars,
    exact: true,
  },
  {
    path: '/new',
    component: CreateCar,
  },
  {
    path: '/cars/:carId/edit',
    component: EditCar,
    exact: true,
  },
];

export default routes;
