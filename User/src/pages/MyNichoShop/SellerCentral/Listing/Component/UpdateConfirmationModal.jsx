import React, { useEffect, useState } from 'react';
import {Button, Modal,Form} from 'react-bootstrap';
import '../sellercentrallisting.scss'


const UpdateConfirmationModal = ({show, setShow, items, handleFinish}) => {

    const [currentValue, setCurrentValue] = useState("")

    function handleChange(value){
        setCurrentValue(value)
    }
    
    
  return (
    <Modal show={show} onHide={() => (setShow(false))}>
        <Modal.Header closeButton>
            <Modal.Title>Enter quantity for selected listings</Modal.Title>
        </Modal.Header>
        <hr />
        <Modal.Body>
        <p>Enter the quantity, then click <b>Submit</b>. It will apply to all selected things.</p>
        <Form.Group className='w-50 mt-4'>
            <Form.Control type='number' value={currentValue}  onChange={(e) => (handleChange(e.target.value))} />
        </Form.Group>
        <div className='d-flex align-items-center mt-5'>
            <Button className='confirmation-modal-button' onClick={() => (handleFinish(currentValue))}>Submit</Button>
            <Button className='confirmation-modal-button outline' onClick={() => (setShow(false))}>Cancel</Button>
        </div>
        </Modal.Body>
    </Modal>
  )
}

export default UpdateConfirmationModal