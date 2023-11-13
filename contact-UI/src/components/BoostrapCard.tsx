import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Contacts } from '../types/card';
import Modal from './Modal';
import DeleteIcon from '@mui/icons-material/Delete';
import deleteContact from '../api/deleteContact';
import EditModal from './EditModal';
import { fetchContacts } from '../api/fetchContacts';
import { useDispatch } from 'react-redux';
interface Props {
    contact: Contacts
}
function BootstrapCard(props: Props) {
    const dispatch = useDispatch();
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);

    const handleShowModal = () => {
        setShowModalEdit(true);
    };
    const handleCloseModal = () => {
        setShowModalEdit(false);
    };

    const handleShowModalDelete = () => {
        setShowModalDelete(true);
    };

    const handleCloseModalDelete = () => {
        setShowModalDelete(false);
    };

    const handleDeleteContact = async () => {
        await deleteContact(props.contact.id)
        dispatch(fetchContacts() as any);
        handleCloseModalDelete();
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
                <Button variant="none" onClick={handleShowModalDelete}>
                    <DeleteIcon />
                </Button>
                <Modal show={showModalEdit} onHide={handleCloseModal} contact={props.contact}>
                    <EditModal contact={props.contact} />
                </Modal>

                <Modal show={showModalDelete} onHide={handleCloseModalDelete} contact={props.contact}>
                    <div>
                        <p>Are you sure you want to delete <strong>{props.contact.name}</strong>?</p>
                        <Button variant="danger" onClick={handleDeleteContact}>
                            Delete
                        </Button>
                        <Button variant="secondary" onClick={handleCloseModalDelete}>
                            Cancel
                        </Button>
                    </div>
                </Modal>
            </Card.Body>
        </Card>

    );
}

export default BootstrapCard;
