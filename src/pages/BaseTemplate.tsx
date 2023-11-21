import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BaseTemplate() {
  return (
    <div className="bg-[url('../assets/bg-body.jpg')]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default BaseTemplate;
