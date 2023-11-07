import { Button } from "react-bootstrap";
import { Contacts } from "../types/card";
import BootstrapCard from "./BoostrapCard";
import Form from "./Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import styled from "styled-components";

interface ContactsProps {
    contacts: Contacts[],
    className?: string
}

function ContactComponent(props: ContactsProps) {
    const [isAdding, setIsAdding] = useState<boolean>(false)
    const isAuthorized = Cookies.get('lwaToken');

    useEffect(() => {
        if (!isAuthorized) {
            window.location.href = '/login';
        }

    }, [isAuthorized]);

    const handleAddContact = () => {
        setIsAdding(true)
    }
    const handleCancelAdd = () => {
        setIsAdding(false)
    }

    return (
        <>
            <div className={`${props.className} container`}>
                <h1>Contacts</h1>

                <Button className='add-button' onClick={handleAddContact}>+ Add new contact</Button>

                {isAdding && <Form isAdding={isAdding} cancelIsAdding={handleCancelAdd} />}
                <div className='display-flex'>
                    {props.contacts.map((c) => <BootstrapCard key={c.id} contact={c} />)}
                </div>

            </div>
        </>
    );
};
export default styled(ContactComponent)`

 display: flex;
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
}
`