import React, { useEffect, useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';
import '../sellercentrallisting.scss'


const DeleteConfirmationModal = ({show, setShow, items, handleFinish}) => {

  return (
    <Modal show={show} onHide={() => (setShow(false))}>
        <Modal.Header closeButton>
            <Modal.Title>Enter quantity for selected listings</Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body>
            {
                items?.length > 1 ?
                <p>Are you sure you want to delete these <b>{items?.length}</b> things?</p>
                :
                <p>Are you sure you want to delete this listing?</p>
            }
        <div className='d-flex align-items-center mt-5'>
            <Button className='confirmation-modal-button' onClick={() => (handleFinish())}>Continue</Button>
            <Button className='confirmation-modal-button outline' onClick={() => (setShow(false))}>Cancel</Button>
        </div>
        </Modal.Body>
    </Modal>
  )
}

export default DeleteConfirmationModal