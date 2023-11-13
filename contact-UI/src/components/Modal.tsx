import BootstrapModal, { ModalProps } from 'react-bootstrap/Modal';
import { Contacts } from '../types/card';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface CustomModalProps extends ModalProps {
    contact?: Contacts;
    children: ReactNode;
    className?: string
}

function Modal(props: CustomModalProps) {

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
                    Details of {props?.contact?.name}
                </BootstrapModal.Title>

            </BootstrapModal.Header>
            <BootstrapModal.Body>
                <div className={props.className}>
                    {props.children}
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