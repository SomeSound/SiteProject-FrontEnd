import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Landing } from '../pages/Landing';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
