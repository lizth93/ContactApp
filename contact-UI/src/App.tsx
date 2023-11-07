import { useEffect, useState } from 'react';
import './App.css';
import fetchContact from './api/fetchContacts';
import { Contacts } from './types/card';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './components/Login';
import ContactComponent from './components/Contacts';

function App() {
  const [contacts, setContacts] = useState<Contacts[]>([])
  const [isAuthorize, setIsAuthorize] = useState<boolean>(false)


  useEffect(() => {
    if (isAuthorize === true) {
      window.location.href = '/home';
    }
  }, [isAuthorize]);


  useEffect(() => {
    async function getContacts() {
      const data = await fetchContact()
      if (data) {
        setContacts(data)
      }
    }
    getContacts()
  }, [])

  const handleAuthentication = (authorize: boolean) => {
    setIsAuthorize(authorize)
  }

  return (

    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <>
            <Route path="home" element={<ContactComponent contacts={contacts} />} />
            <Route path="login" element={<Login onAuthentication={handleAuthentication} />} />
          </>
        )
      )}
    />


  );
}

export default App
