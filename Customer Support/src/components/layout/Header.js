import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as MainIcon } from '../../assets/svg/Header/mainIcon.svg';
import { ReactComponent as BellIcon } from '../../assets/svg/Header/bell.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/Header/user.svg';
import { ReactComponent as MessageIcon } from '../../assets/svg/Header/mail.svg';
import { ReactComponent as ChatIcon } from '../../assets/svg/Header/message.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/Header/search.svg';
import { ReactComponent as FileTextIcon } from '../../assets/svg/Header/file-text.svg';
import { ReactComponent as CalendarIcon } from '../../assets/svg/Header/calendar.svg';

import { setCurrentMessage } from '../../actions/header';

import '../../css/layout/Header.css';

const Header = () => {
    const headerState = useSelector(state => state.header);
    const dispatch = useDispatch();
    const pageIconClicked = (e) => {
        dispatch(setCurrentMessage(e.target.id));
    }

    return (
        <Navbar className='Navbar'>
            <Container>
                <Navbar.Collapse className='justify-content-start' href="#home"><MainIcon /></Navbar.Collapse>
                {/* <Navbar.Toggle /> */}
                <Navbar.Collapse className="justify-content-center">
                    <Link to="/search">
                        <SearchIcon className={headerState.currentPage === 'search' ? 'icon-selected' : 'icon'} id="search" onClick={pageIconClicked} />
                    </Link>
                    <Link to="/message">
                        <MessageIcon className={headerState.currentPage === 'message' ? 'icon-selected' : 'icon'} id="message" onClick={pageIconClicked} />
                    </Link>
                    <Link to="/chat">
                        <ChatIcon className={headerState.currentPage === 'chat' ? 'icon-selected' : 'icon'} id="chat" onClick={pageIconClicked} />
                    </Link>
                    <Link to="/requests">
                        <FileTextIcon className={headerState.currentPage === 'file-text' ? 'icon-selected' : 'icon'} id="file-text" onClick={pageIconClicked} />
                    </Link>
                    <Link to="/deals">
                        <CalendarIcon className={headerState.currentPage === 'calendar' ? 'icon-selected' : 'icon'} id="calendar" onClick={pageIconClicked} />
                    </Link>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <BellIcon className='icon' />
                    <UserIcon className='icon' />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;