import React from "react";
import './Message.css';
import Footer from '../components/Footer'
import Header from '../components/Header'
import Table from '../components/TableComponents/Table'
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentMessageType } from "../actions/index";
import { ReactComponent as NavbarSubMenuIcon } from '../assets/svg/message/navbarSubMenuIcon.svg';

const Message = () => {
    const message = useSelector(state => state.message);

    // console.log(message);
    const dispatch = useDispatch()

    const setChecked = (e) => {
        // console.log(e.target.value, 0);
        dispatch(setCurrentMessageType(e.target.value, 0));
    }

    const subMenuClicked = (e) => {
        dispatch(setCurrentMessageType(message.currentMessageType, e.target.id));
    }

    const messageEx = [
        { checked: true, flaged: true, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: false, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: true, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: false, unread: true, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: false, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: true, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: true, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: false, important: false, unread: true, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: false, important: false, unread: false, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: false, unread: false, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: true, important: false, unread: true, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: true, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: false, important: true, unread: false, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: true, important: false, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: false, flaged: false, important: false, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: true, unreplied: false, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) },
        { checked: true, flaged: false, important: true, unread: false, unreplied: true, from: 'CS_12', subject: 'Transferred Chat session-CH123456789', date: new Date(2010, 10, 2, 12, 24, 22) }
    ];

    return (
        <div className="Message">
            <Header />
            <div className="body">
                <div className="layout">
                    <div className="navbar">
                        <button className="btn-new-message">New Message</button>
                        <br />
                        <br />
                        <form>
                            <input type="radio" id="Inbox" name="fav_language" value="Inbox" checked={message.currentMessageType === "Inbox"} onChange={setChecked} />
                            <label htmlFor="Inbox" className="btn-radio">Inbox</label><br />
                            {message.currentMessageType === "Inbox" ? (
                                <table className="navbar-submenu">
                                    <tbody>
                                        <tr>
                                            {message.currentSubMessage == '0' ? <td><NavbarSubMenuIcon /></td> : <td></td>}
                                            {message.currentSubMessage == '0' ? <th><div id='0' onClick={subMenuClicked}>All messages</div></th> : <td><div id='0' onClick={subMenuClicked}>All messages</div></td>}
                                            {message.currentSubMessage == '0' ? <th>99</th> : <td>99</td>}
                                        </tr>
                                        <tr>
                                            {message.currentSubMessage == '1' ? <td><NavbarSubMenuIcon /></td> : <td></td>}
                                            {message.currentSubMessage == '1' ? <th><div id='1' onClick={subMenuClicked}>Related my purchases</div></th> : <td><div id='1' onClick={subMenuClicked}>Related my purchases</div></td>}
                                            {message.currentSubMessage == '1' ? <th>99</th> : <td>99</td>}
                                        </tr>
                                        <tr>
                                            {message.currentSubMessage == '2' ? <td><NavbarSubMenuIcon /></td> : <td></td>}
                                            {message.currentSubMessage == '2' ? <th><div id='2' onClick={subMenuClicked}>Related my sales</div></th> : <td><div id='2' onClick={subMenuClicked}>Related my sales</div></td>}
                                            {message.currentSubMessage == '2' ? <th>99</th> : <td>99</td>}
                                        </tr>
                                        <tr>
                                            {message.currentSubMessage == '3' ? <td><NavbarSubMenuIcon /></td> : <td></td>}
                                            {message.currentSubMessage == '3' ? <th><div id='3' onClick={subMenuClicked}>My account</div></th> : <td><div id='3' onClick={subMenuClicked}>My account</div></td>}
                                            {message.currentSubMessage == '3' ? <th>99</th> : <td>99</td>}
                                        </tr>
                                    </tbody>
                                </table>
                            ) : (
                                <div></div>
                            )}
                            <input type="radio" id="Sent" name="fav_language" value="Sent" checked={message.currentMessageType === "Sent"} onChange={setChecked} />
                            <label htmlFor="Sent" className="btn-radio">Sent</label><br />
                            <input type="radio" id="Trash" name="fav_language" value="Trash" checked={message.currentMessageType === "Trash"} onChange={setChecked} />
                            <label htmlFor="Trash" className="btn-radio">Trash</label><br />
                            <input type="radio" id="Folders" name="fav_language" value="Folders" checked={message.currentMessageType === "Folders"} onChange={setChecked} />
                            <label htmlFor="Folders" className="btn-radio">Folders</label>
                        </form>
                    </div>

                    <div className="content">
                        <Table messages={messageEx}></Table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Message;