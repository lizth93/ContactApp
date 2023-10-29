import BootstrapModal from 'react-bootstrap/Modal';
import { Contacts } from '../types/card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { useState } from 'react';
import Input from './Input';
import updateContact from '../api/updateContact';

interface Props {
    className?: string
    show: boolean,
    onHide: () => void;
    contact: Contacts
}
function Modal(props: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState({ ...props.contact });

    const handleEditContact = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setEditedContact({ ...props.contact });
        setIsEditing(false);
    };

    const handleEditValue = (field: string, newValue: string) => {
        setEditedContact((prevEditedContact) => ({
            ...prevEditedContact,
            [field]: newValue,
        }));
    };

    // const handleEditValue = (newValue: string) => {
    //     setEditedContact({ ...editedContact, name: newValue });
    // };

    const handleSaveContact = async () => {
        console.log(editedContact, "edited contac what have luz")
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

                            <div>
                                <Input type='text' label="Name" value={editedContact.name} onChange={(newValue) => handleEditValue("name", newValue)} />
                                <Input type='text' label="Last Name" value={editedContact.lastName} onChange={(newValue) => handleEditValue("lastName", newValue)} />
                                <Input type='email' label="Email" value={editedContact.email} onChange={(newValue) => handleEditValue("email", newValue)} />
                                <Input type='number' label="Phone Number" value={editedContact.phoneNumber} onChange={(newValue) => handleEditValue("phoneNumber", newValue)} />
                                <Input type='text' label="Team Member" value={editedContact.teamMember} onChange={(newValue) => handleEditValue("teamMember", newValue)} />
                                <Input type='text' label="Address" value={editedContact.address} onChange={(newValue) => handleEditValue("address", newValue)} />
                                <Input type='text' label="Picture" value={editedContact.imageUrl} onChange={(newValue) => handleEditValue("imageUrl", newValue)} />
                            </div>
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
        </BootstrapModal>

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