import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function BaseTemplate() {
  return (
    <>
      <Header />
      <body className="homeBody">
        <Outlet />
      </body>
      <Footer />
    </>
  );
}

export default BaseTemplate;
