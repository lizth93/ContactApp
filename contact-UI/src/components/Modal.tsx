import BootstrapModal, { ModalProps } from 'react-bootstrap/Modal';
import { Contacts } from '../types/card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './Input';
import updateContact from '../api/updateContact';
import { inputFields } from '../constants';

function Modal(props: ModalProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState<Contacts>({ ...props.contact });

    const handleEditContact = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setEditedContact({ ...props.contact });
        setIsEditing(false);
    };

    const handleEditValue = (field: string, newValue: string) => {
        setEditedContact((prevEditedContact: Contacts) => ({
            ...prevEditedContact,
            [field]: newValue,
        }));
    };

    const handleSaveContact = async () => {
        setIsEditing(false);
        const data = await updateContact(props.contact.id, editedContact)
        console.log(data, "luz")
    };

    return (
        <BootstrapModal
            size="lg"
            className={props.className}
            show={props.show}
            onHide={props.onHide}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <BootstrapModal.Header closeButton>
                <BootstrapModal.Title id="example-custom-modal-styling-title">
                    Details of {props.contact.name}
                </BootstrapModal.Title>

            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <div className='modal-grid '>
                    <Image src={props.contact.imageUrl} alt="Contact" className='image' />

                    <div>
                        {isEditing ? (

                            <>
                                {inputFields.map((field) => (
                                    <Input
                                        key={field.key}
                                        type={field.type}
                                        label={field.label}
                                        value={editedContact[field.key]}
                                        onChange={(newValue) => handleEditValue(field.key, newValue)}
                                    />
                                ))}
                            </>

                        ) : (

                            <ul>
                                <li>Name: {props.contact.name}</li>
                                <li>Last Name: {props.contact.lastName}</li>
                                <li>Email: {props.contact.email}</li>
                                <li>Phone Number:<strong>{props.contact.phoneNumber}</strong></li>
                                <li>Team Member: {props.contact.teamMember}</li>
                                <li>Address: {props.contact.address}</li>
                            </ul>
                        )}

                        <div className='contact-buttons'>
                            {isEditing ? (
                                <>
                                    <Button variant="secondary" onClick={handleSaveContact}>
                                        Save
                                    </Button>
                                    <Button variant="danger" onClick={handleCancelEdit}>
                                        Cancel
                                    </Button>
                                </>
                            ) : (

                                <Button variant="primary" onClick={handleEditContact}>
                                    Edit
                                </Button>
                            )}

                        </div>
                    </div>

                </div>

            </BootstrapModal.Body>
        </BootstrapModal >

    );
}

export default styled(Modal)`
.modal-grid {
  display: grid;
  grid-template-columns: 2fr 3fr; 
  grid-gap: 10px; 
}
.image {
  max-width: 100%; 
  max-height: 100%; 
}
.contact-buttons{
    display: flex;
    gap: 1rem;
}
`;