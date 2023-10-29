import Col from 'react-bootstrap/Col';
import BootstrapForm from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { inputFields } from '../constants';
import Input from './Input';
import { Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { FormProps } from '../types/general';
import addContact from '../api/addContact';
import { useState } from 'react';
import { Contacts } from '../types/card';


const initialContact: Contacts = {
    id: 0,
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    teamMember: "",
    address: "",
    imageUrl: "",
    birthday: "",
}

function Form(props: FormProps) {

    const [newContact, setNewContact] = useState<Contacts>(initialContact);

    const handleAddContact = (field: string, newValue: string) => {
        setNewContact((prevNewContact) => ({
            ...prevNewContact,
            [field]: newValue,
        }));
    }
    const handleSaveContact = async () => {
        // setIsAdding(false)
        const data = await addContact(newContact)
        console.log(data, "new Contact ")

    }

    const handleCancelAdd = () => {
        props.cancelIsAdding(false)
    }
    return (
        <Container fluid className={props.className}>
            <BootstrapForm>
                <Row>
                    {inputFields.map((field) => (
                        <Col key={field.key} sm={6}>
                            <Input
                                type={field.type}
                                label={field.label}
                                onChange={(newValue) => handleAddContact(field.key, newValue)} />
                        </Col>
                    ))}


                </Row>
                {props.isAdding && <>
                    <Button variant="primary" onClick={handleSaveContact}>
                        Save
                    </Button>
                    <Button variant="secondary" onClick={handleCancelAdd}>
                        Cancel
                    </Button>
                </>
                }

            </BootstrapForm>
        </Container>
    );
}

export default styled(Form)`
 background-color:#F0F8FF;
 padding: 2rem;
 border-radius: 20px;
 margin-bottom: 2rem;
`;