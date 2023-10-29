import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Contacts } from '../types/card';
import Modal from './Modal';

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


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.contact.imageUrl} />
            <Card.Body>
                <Card.Title>{props.contact.name}</Card.Title>
                <Card.Text>
                    Phone Number: {props.contact.phoneNumber}
                </Card.Text>
                <Button variant="primary" onClick={handleShowModal}>Details</Button>
                <Modal show={showModal} onHide={handleCloseModal} contact={props.contact}></Modal>
            </Card.Body>
        </Card>
    );
}

export default BootstrapCard;
