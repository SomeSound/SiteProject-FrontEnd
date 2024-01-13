import { Outlet } from 'react-router-dom';
import { Routes } from './src/routes/Routes';

function App() {
  return (
    <div className="app">
      <div>NavBar</div>
      <div>SideBar</div>
      <Outlet />
    </div>
  );
}

export default App;
