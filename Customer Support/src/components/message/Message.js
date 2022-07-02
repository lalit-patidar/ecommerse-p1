import React, { useState, useEffect } from 'react';
import '../../css/message/message.css';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as RightArrowLogo } from '../../assets/svg/Message/right-arrow.svg';

import { Container, Row, Col, Button, Form, FormControl } from 'react-bootstrap';
import Table from './Table';
import { createNewFolder } from '../../actions/message';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';

const Message = () => {
    const folders = useSelector(state => state.message.folders);
    const dispatch = useDispatch();
    const [currentSection, setCurrentSection] = useState('');
    const [currentInboxSubSection, setCurrentInboxSubSection] = useState(1);
    const [currentFolderSubSection, setCurrentFolderSubSection] = useState(folders.length === 0 ? -1 : 0);
    const unreadMsgs = useSelector(state => state.message.messages.filter(msg => (msg.location === "Inbox" && msg.unread)));
    const [unreadMsgCount, setUnreadMsgCount] = useState(0);
    const [unreadMsgsFromMemCount, setUnreadMsgsFromMemCount] = useState(0);
    const [unreadMsgsFromAgentCount, setUnreadMsgsFromAgentCount] = useState(0);
    const [newFolderName, setNewFolderName] = useState('');

    const sectionClicked = (e) => {
        if (e.target.type === "radio")
            setCurrentSection(e.target.id);
    }

    const folderNameFieldChanged = (e) => {
        // e.preventDefault();
        setNewFolderName(e.target.value);
    }

    const folderCreate = () => {
        if (newFolderName === '') return;
        dispatch(createNewFolder(newFolderName));
        setCurrentFolderSubSection(0);
        setNewFolderName('');
    }
    // console.log(folders);

    useEffect(() => {
        setUnreadMsgCount(unreadMsgs.length);
        setUnreadMsgsFromAgentCount(unreadMsgs.filter(msg => msg.from === "support agent").length);
        setUnreadMsgsFromMemCount(unreadMsgs.filter(msg => msg.from === "member").length);
    }, unreadMsgs);

    // console.log(currentSection, currentInboxSubSection)
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
                                        <Col xs={2}>{unreadMsgCount}</Col>
                                    </Row>
                                    <Row onClick={() => setCurrentInboxSubSection(2)} className={currentInboxSubSection === 2 ? 'subsection-active' : 'subsection'}>
                                        <Col xs={1}>{currentInboxSubSection === 2 ? <RightArrowLogo /> : ''}</Col>
                                        <Col xs={8}>From members</Col>
                                        <Col xs={2}>{unreadMsgsFromMemCount}</Col>
                                    </Row>
                                    <Row onClick={() => setCurrentInboxSubSection(3)} className={currentInboxSubSection === 3 ? 'subsection-active' : 'subsection'}>
                                        <Col xs={1}>{currentInboxSubSection === 3 ? <RightArrowLogo /> : ''}</Col>
                                        <Col xs={8}>From support agents</Col>
                                        <Col xs={2}>{unreadMsgsFromAgentCount}</Col>
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
                            {currentSection === "Folders" ? (
                                <div className='folder-subsection'>
                                    {currentFolderSubSection === -1 ? (
                                        <div>
                                            <FormControl type="text" value={newFolderName} onChange={folderNameFieldChanged} placeholder="Example" />
                                            <Button variant="outline-primary" onClick={folderCreate}>
                                                Save
                                            </Button>
                                            {folders.length !== 0 ? (
                                                <>
                                                    <span style={{ verticalAlign: 'bottom' }}>or</span>
                                                    <Button variant="outline-primary" onClick={() => setCurrentFolderSubSection(0)}>
                                                        Cancel
                                                    </Button>
                                                </>
                                            ) : ''}
                                        </div>
                                    ) : (
                                        ''
                                    )}
                                    <Container>
                                        {folders.map((folder, index) => (
                                            <Row key={index} onClick={() => setCurrentFolderSubSection(index)} className={currentFolderSubSection === index ? 'subsection-active' : 'subsection'}>
                                                <Col xs={1}>{currentFolderSubSection === index ? <RightArrowLogo /> : ''}</Col>
                                                <Col xs={7}>{folder.name}</Col>
                                                <Col xs={2}>{unreadMsgCount}</Col>
                                                <Col xs={1}>.</Col>
                                            </Row>
                                        ))}
                                    </Container>
                                    {folders.length > 0 ? (
                                        <Button variant="outline-primary" onClick={() => setCurrentFolderSubSection(-1)}>
                                            Add a folder
                                        </Button>

                                    ) : ""}

                                </div>
                            ) : ''}
                        </div>
                    </Form>
                </Col>
                <Col xs={9}>
                    <Table section={currentSection} subsection={currentInboxSubSection} />
                </Col>
            </Row>
        </div >
    );
}

export default Message;