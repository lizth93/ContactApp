import { useEffect, useState } from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/Login';
import ContactComponent from './components/Contacts';

import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const [isAuthorize, setIsAuthorize] = useState<boolean>(false)


  useEffect(() => {
    if (isAuthorize === true) {
      window.location.href = '/home';
    }
  }, [isAuthorize]);

  const handleAuthentication = (authorize: boolean) => {
    setIsAuthorize(authorize)
  }

  return (
    <Provider store={store}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <>
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route path="home" element={<ContactComponent />} />
              <Route path="login" element={<Login onAuthentication={handleAuthentication} />} />
            </>
          )
        )}
      />
    </Provider>


  );
}

export default App
