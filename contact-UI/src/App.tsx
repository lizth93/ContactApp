import { useEffect, useState } from 'react';
import './App.css';
import fetchContact from './api/fetchContacts';
import BootstrapCard from './components/BoostrapCard';
import styled from 'styled-components';
import { Contacts } from './types/card';
import Button from 'react-bootstrap/Button';
import Form from './components/Form';
import { Props } from './types/general';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate
} from 'react-router-dom';
import Login from './components/Login';

interface ContactsProps {
  contacts: Contacts[];
}

function App(props: Props) {
  const [contacts, setContacts] = useState<Contacts[]>([])
  // const [isAdding, setIsAdding] = useState<boolean>(false)

  // useEffect(() => {
  //   async function getContacts() {
  //     const data = await fetchContact()
  //     if (data) {
  //       setContacts(data)
  //     }
  //     console.log(data)

  //   }
  //   getContacts()
  // }, [])

  // const handleAddContact = () => {
  //   setIsAdding(true)
  // }
  // const handleCancelAdd = () => {
  //   setIsAdding(false)
  // }

  const Contacts = ({ contacts }: ContactsProps) => {
    return (
      <div className='display-flex'>
        {contacts.map((c) => <BootstrapCard key={c.id} contact={c} />)}
      </div>
    );
  };

  const handleAuthentication = (token: string) => {
    console.log(token, "token luz")
    // Aquí puedes manejar la autorización, como almacenar el token en el estado
    // o realizar una redirección a la página de inicio.
  }

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Login onAuthentication={handleAuthentication} />}>
            <Route path="home" element={<Contacts contacts={contacts} />} />
          </Route>
        )
      )}

    />

    // <div className={`${props.className} container`}>
    //   <h1>Contacts</h1>

    //   <Button className='add-button' onClick={handleAddContact}>+ Add new contact</Button>

    //   {isAdding && <Form isAdding={isAdding} cancelIsAdding={handleCancelAdd} />}
    //   <div className='display-flex'>
    //     {contacts.map((c) => <BootstrapCard key={c.id} contact={c} />)}
    //   </div>

    // </div>
  );
}

export default styled(App)`
 /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

.display-flex {
  justify-content: center;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

}
.add-button{
  margin-bottom:  2rem;
  align-self: flex-end;
} */
`;
