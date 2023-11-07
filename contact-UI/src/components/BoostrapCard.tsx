import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Contacts } from '../types/card';
import Modal from './Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import deleteContact from '../api/deleteContact';

interface Props {
    contact: Contacts
}
function BootstrapCard(props: Props) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleDeleteContact = async () => {
        const data = await deleteContact(props.contact.id)
        console.log(data, "luz darta")
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.contact.imageUrl} />
            <Card.Body>
                <Card.Title>{props.contact.name}</Card.Title>
                <Card.Text>
                    Phone Number: {props.contact.phoneNumber}
                </Card.Text>
                <Button variant="primary" onClick={handleShowModal}>Details</Button>
                <Button variant="none" onClick={handleDeleteContact}>
                    <DeleteIcon />
                </Button>
                <Modal show={showModal} onHide={handleCloseModal} contact={props.contact}></Modal>
            </Card.Body>
        </Card>

    );
}

export default BootstrapCard;
