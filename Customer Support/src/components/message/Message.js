import React, { useState, useEffect } from 'react';
import '../../css/message/message.css';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as RightArrowLogo } from '../../assets/svg/Message/right-arrow.svg';

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Table from './Table';

const Message = () => {
    const [currentSection, setCurrentSection] = useState('');
    const [currentInboxSubSection, setCurrentInboxSubSection] = useState(1);
    const messages = useSelector(state => state.messages);

    const sectionClicked = (e) => {
        setCurrentSection(e.target.id);
    }

    return (
        <div className='body'>
            <Row>
                <Col>
                    <Button width="168px" height="42px" variant="primary">New message</Button>
                    <Form onChange={sectionClicked} id={currentSection}>
                        <br />
                        <div className={currentSection === 'Inbox' ? "section-active" : "section"}>
                            <Form.Check
                                type='radio'
                                label={
                                    <div className='label'>
                                        Inbox
                                    </div>
                                }
                                name='section'
                                id='Inbox'
                            />
                            {currentSection === 'Inbox' ?
                                <Container>
                                    <Row onClick={() => setCurrentInboxSubSection(1)} className={currentInboxSubSection === 1 ? 'subsection-active' : 'subsection'}>
                                        <Col xs={1}>{currentInboxSubSection === 1 ? <RightArrowLogo /> : ''}</Col>
                                        <Col xs={8}>All messages</Col>
                                        <Col xs={2}>9999</Col>
                                    </Row>
                                    <Row onClick={() => setCurrentInboxSubSection(2)} className={currentInboxSubSection === 2 ? 'subsection-active' : 'subsection'}>
                                        <Col xs={1}>{currentInboxSubSection === 2 ? <RightArrowLogo /> : ''}</Col>
                                        <Col xs={8}>From members</Col>
                                        <Col xs={2}>2</Col>
                                    </Row>
                                    <Row onClick={() => setCurrentInboxSubSection(3)} className={currentInboxSubSection === 3 ? 'subsection-active' : 'subsection'}>
                                        <Col xs={1}>{currentInboxSubSection === 3 ? <RightArrowLogo /> : ''}</Col>
                                        <Col xs={8}>From support agents</Col>
                                        <Col xs={2}>9997</Col>
                                    </Row>
                                </Container>
                                : ''}
                        </div>
                        <br />
                        <div className={currentSection === 'Sent' ? "section-active" : "section"}>
                            <Form.Check
                                type='radio'
                                label={
                                    <div className='label'>
                                        Sent
                                    </div>
                                }
                                name='section'
                                id='Sent'
                            />
                        </div>
                        <br />
                        <div className={currentSection === 'Trash' ? "section-active" : "section"}>
                            <Form.Check
                                type='radio'
                                label={
                                    <div className='label'>
                                        Trash
                                    </div>
                                }
                                name='section'
                                id='Trash'
                            />
                        </div>
                        <br />
                        <div className={currentSection === 'Folders' ? "section-active" : "section"}>
                            <Form.Check
                                type='radio'
                                label={
                                    <div className='label'>
                                        Folders
                                    </div>
                                }
                                name='section'
                                id='Folders'
                            />
                        </div>
                        <br />
                    </Form>
                </Col>
                <Col xs={10}>
                    <Table section={currentSection} subsection={currentInboxSubSection} />
                </Col>
            </Row>
        </div>
    );
}

export default Message;