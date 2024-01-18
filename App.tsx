import { Outlet } from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";

import './src/output.scss';

function App() {
  return (
    <NextUIProvider>
      <div className="app">
        <Outlet />
      </div>
    </NextUIProvider>
  );
}

export default App;
