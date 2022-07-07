import React, { useEffect, useState } from 'react';
import {Button, Modal, Container, Row, Col} from 'react-bootstrap';
import '../sellercentrallisting.scss'


const DeleteConfirmationModalLarge = ({show, setShow, items, handleFinish}) => {

    const [someOptionSelected, setSomeOptionSelected] = useState(false)

    function handleOption(checked){
        if(checked){
            setSomeOptionSelected(true)
        }
    }


  return (
    <Modal show={show} fullscreen={true}>
        <Container>
            <Row>
                <Col xs='12' md='7'>
                    <div className='confirmation-modal-wrapper'>
                        <Modal.Header>
                            <Modal.Title>Delete my listing</Modal.Title>
                        </Modal.Header>
                        <hr />
                        <Modal.Body>
                            <h6>You've selected {items.length} listing{items.length > 1 ? 's' : ''}:</h6>
                            <ul className='selected-items-list'>    
                                {
                                    items?.map(item => (
                                        <li>{item.name}</li>
                                    ))
                                }
                            </ul>
                            <h6 className='py-3'>Choice a reason for deleting your listing{items.length > 1 ? 's' : ''}:</h6>
                            <div className=''>
                                <label className='custom-radio-button'>
                                    <input type="radio" name="reason" onChange={(e) => (handleOption(e.target.checked))} />
                                    <span class="checkmark"></span>
                                    <span className='radio-text'>The item{items.length > 1 ? 's' : ''} {items.length > 1 ? 'are' : 'is'} no longer available for sale</span>
                                </label>
                                <label className='custom-radio-button'>
                                    <input type="radio" name="reason" onChange={(e) => (handleOption(e.target.checked))} />
                                    <span class="checkmark"></span>
                                    <span className='radio-text'>There was an error in the listing{items.length > 1 ? 's' : ''}</span>

                                </label>
                                <label className='custom-radio-button'>
                                    <input type="radio" name="reason" onChange={(e) => (handleOption(e.target.checked))} />
                                    <span class="checkmark"></span>
                                    <span className='radio-text'>There was an error in starting price, Buy it now price, or reserve price</span>

                                </label>
                                <label className='custom-radio-button'>
                                    <input type="radio" name="reason" onChange={(e) => (handleOption(e.target.checked))} />
                                    <span class="checkmark"></span>
                                    <span className='radio-text'>The item{items.length > 1 ? 's' : ''} {items.length > 1 ? 'were' : 'was'} lost or broken</span>

                                </label>
                            </div>
                            <div className='d-flex align-items-center mt-5'>
                                <Button className='confirmation-modal-button' disabled={!someOptionSelected} onClick={() => (handleFinish())}>Continue</Button>
                                <Button className='confirmation-modal-button outline' onClick={() => (setShow(false))}>Cancel</Button>
                            </div>
                        </Modal.Body>
                    </div>
                </Col>
            </Row>
        </Container>

    </Modal>
  )
}

export default DeleteConfirmationModalLarge