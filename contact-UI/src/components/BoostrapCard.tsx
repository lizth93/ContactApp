import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Contacts } from '../types/card';

interface Props {
    contact: Contacts
}
function BootstrapCard(props: Props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.contact.imageUrl} />
            <Card.Body>
                <Card.Title>{props.contact.name}</Card.Title>
                <Card.Text>
                    {props.contact.phoneNumber}
                </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}

export default BootstrapCard;
