import { useState } from "react";
import { inputFields } from "../constants";
import Input from "./Input";
import Image from 'react-bootstrap/Image';
import updateContact from "../api/updateContact";
import { Contacts } from '../types/card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from "react-redux";
import { fetchContacts } from "../api/fetchContacts";

interface EditModalProps {
    contact: Contacts;
}

export default function EditModal({ contact }: EditModalProps) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editedContact, setEditedContact] = useState<Contacts>({ ...contact });

    const handleEditContact = () => {
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setEditedContact({ ...contact });
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
        await updateContact(contact.id, editedContact)
        dispatch(fetchContacts() as any);
    };
    return <>
        <Image src={contact.imageUrl} alt="Contact" className='image' />

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
                    <li>Name: {contact.name}</li>
                    <li>Last Name: {contact.lastName}</li>
                    <li>Email: {contact.email}</li>
                    <li>Phone Number:<strong>{contact.phoneNumber}</strong></li>
                    <li>Team Member: {contact.teamMember}</li>
                    <li>Address: {contact.address}</li>
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
    </>
}
