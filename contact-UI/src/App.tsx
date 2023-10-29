import { useEffect, useState } from 'react';
import './App.css';
import fetchContact from './api/fetchContacts';
import BootstrapCard from './components/BoostrapCard';
import styled from 'styled-components';
import { Contacts } from './types/card';

interface Props {
  className?: string
}

function App(props: Props) {

  const [contacts, setContacts] = useState<Contacts[]>([])

  useEffect(() => {
    async function getContacts() {
      const data = await fetchContact()
      if (data) {
        setContacts(data)
      }
      console.log(data)

    }
    getContacts()
  }, [])

  return (
    <div className={`${props.className} container`}>
      <h1>Contacts</h1>

      <div className='display-flex'>
        {contacts.map((c) => <BootstrapCard key={c.id} contact={c} />)}
      </div>

    </div>
  );
}

export default styled(App)`
.display-flex {
  display: flex;
  gap: 1rem;

}
`;
