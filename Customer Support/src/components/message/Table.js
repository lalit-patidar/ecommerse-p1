import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import '../../css/message/table.css';

import { Stack, Form, Button, Dropdown } from 'react-bootstrap';

import { ReactComponent as SearchLogo } from '../../assets/svg/Message/search.svg';
import { ReactComponent as UnFlaggedLogo } from '../../assets/svg/Message/flag.svg';
import { ReactComponent as ImportantLogo } from '../../assets/svg/Message/alert.svg';
import { ReactComponent as FlaggedLogo } from '../../assets/svg/Message/flag-active.svg';
import { ReactComponent as RepliedLogo } from '../../assets/svg/Message/reply.svg';

import { flagMessage } from '../../actions/message'


const Table = ({ section, subsection }) => {
    const dispatch = useDispatch();
    const allMessages = useSelector(state => state.message.messages);
    const [messages, setMessages] = useState([]);
    const [check, setCheck] = useState([]);

    const flagged = (id) => {
        dispatch(flagMessage(id));
    }

    const checked = (id) => {
        setCheck((check) =>
        (check.map(
            (cell, index) => (
                index === id ? !cell : cell
            )
        )))
    }

    useEffect(() => {
        // console.log(section, subsection);
        let newMessages = allMessages.filter(message => (message.location === section))


        if (section === "Inbox") {
            // if (subsection === 1) {
            //     setMessages(allMessages.inbox);
            // } else
            if (subsection === 2) {
                newMessages = newMessages.filter((message) => (message.from === "member"));
            } else if (subsection === 3) {
                // setMessages(allMessages.inbox.filter((message) => (message.from === "support agent")));
                newMessages = newMessages.filter((message) => (message.from === "support agent"));
            }
        }

        setMessages(newMessages);
        setCheck(newMessages.map(m => false));
        // } else if (section === "Sent") {
        //     setMessages(allMessages.sent);
        // } else if (section === "Trash") {
        //     setMessages(allMessages.trash);
        // } else if (section === "Folders") {
        //     setMessages([]);
        // }
    }, [section, subsection, allMessages]);
    return (
        <table className='Table'>
            <thead>
                <tr>
                    <td colSpan={7}>
                        <Stack direction="horizontal" gap={3}>
                            <Form.Check type="checkBox" />
                            <Form.Select>
                                <option value="All">All</option>
                                <option value="Flagged">Flagged</option>
                                <option value="Important">Important</option>
                                <option value="Unread">Unread</option>
                                <option value="Unreplied">Unreplied</option>
                            </Form.Select>
                            <Button variant="outline-secondary" className='border'>Delete</Button>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" className='border'>
                                    Move to
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item>Trash</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant="outline-secondary" className='border'>Transfer</Button>
                            <Button variant="outline-secondary" className='border ms-auto'><SearchLogo /></Button>
                        </Stack>
                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="header" width="4%" />
                    <td className="header" width="4%" />
                    <td className="header" width="4%" />
                    <td className="header" width="4%" />
                    <td className="header" width="26%">From</td>
                    <td className="header" width="50%">Subject</td>
                    <td className="header" width="8%">
                        <Dropdown>
                            <Dropdown.Toggle variant="light">
                                Date
                            </Dropdown.Toggle>
                        </Dropdown>
                    </td>
                </tr>
                {messages.map((message, index) => {
                    const item =
                        (
                            <tr key={index} className={(section === "Inbox" && message.unread) ? "message-unread" : "message-read"}>
                                <td><Form.Check type="checkBox" onChange={() => checked(index)} checked={check[index]} /></td>
                                <td>{message.flagged ? <FlaggedLogo onClick={() => flagged(message.id)} /> : <UnFlaggedLogo onClick={() => flagged(message.id)} />}</td>
                                <td>{message.important ? <ImportantLogo /> : ''}</td>
                                <td>{message.replied ? <RepliedLogo /> : ''}</td>
                                <td>{message.fromTo}</td>
                                <td>{message.subject}</td>
                                <td>{message.date.toLocaleTimeString()}</td>
                            </tr>
                        );
                    return item;
                })}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    );
}

Table.propTypes = {
    section: PropTypes.string,
    subsection: PropTypes.number
}

export default Table;