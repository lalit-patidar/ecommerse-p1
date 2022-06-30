import React, { useState, useEffect } from 'react';
import './Table.css';
import Select from './Select';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import SearchBox from './SearchBox';

import { useSelector, useDispatch } from 'react-redux';
import { setVisibleSetting } from '../../actions/index';
import { CallSearchBox } from '../../actions/index';
import { ReactComponent as SearchLogo } from '../../assets/svg/message/search.svg';
import { ReactComponent as FlagLogo } from '../../assets/svg/message/flag.svg';
import { ReactComponent as AlertLogo } from '../../assets/svg/message/alert.svg';
import { ReactComponent as DropDownLogo } from '../../assets/svg/message/dropdownBlack.svg';
import { ReactComponent as FlagedLogo } from '../../assets/svg/message/flag-active.svg';
import { ReactComponent as CornerUpLeftLogo } from '../../assets/svg/message/corner-up-left.svg';
import { ReactComponent as RightLogo } from '../../assets/svg/message/right.svg';
import { ReactComponent as LeftLogo } from '../../assets/svg/message/left.svg';


const Table = ({ messages }) => {
    const [messagesPerPage, setMessagesPerPage] = useState(5);
    const [pageCount, setPageCount] = useState(Math.ceil(messages.length / messagesPerPage));
    const [currentPage, setCurrentPage] = useState(0);
    const [visibleStartPage, setVisibleStartPage] = useState(0);
    const [visibleEndPage, setVisibleEndPage] = useState(4);

    const message = useSelector(state => state.message)
    const dispatch = useDispatch()

    const setVisibility = (key) => {
        dispatch(setVisibleSetting(key));
    }

    const popSearchBox = () => {
        dispatch(CallSearchBox());
    }
    // console.log(messages);

    useEffect(() => {
        setPageCount(Math.ceil(messages.length / messagesPerPage));
        if (visibleStartPage > currentPage) {
            setVisibleStartPage(currentPage);
            endPage = currentPage + 4;
            if (pageCount > endPage) setVisibleEndPage(endPage);
            else setVisibleEndPage(pageCount);
        } else if (visibleEndPage <= currentPage) {
            setVisibleEndPage(currentPage);
            startPage = currentPage - 4;
            if (startPage > 0) setVisibleStartPage(startPage);
            else setVisibleStartPage(0);
        }
    }, [currentPage, messagesPerPage]);

    return (
        <table className="Table">
            <tbody>
                <tr>
                    <td colSpan='7'>
                        <Select onChange={setVisibility} value={message.visibility} options={['All', 'Flagged', 'Important', 'Unread', 'Unreplied']} />
                        <button className="button">Delete</button>
                        <Dropdown options={['Trash', 'My example folder1', 'My example folder2']} />
                        <button className="button">Transfer</button>
                        <button className="searchButton" onClick={popSearchBox}><SearchLogo /></button>
                        {message.searchBoxVisible ? <SearchBox /> : ""}
                    </td>
                </tr>
                <tr>
                    <td className="tableHeader" width="4%" />
                    <td className="tableHeader" width="4%" />
                    <td className="tableHeader" width="4%" />
                    <td className="tableHeader" width="4%" />
                    <td className="tableHeader" width="26%">From</td>
                    <td className="tableHeader" width="50%">Subject</td>
                    <td className="tableHeader" width="8%">Date <DropDownLogo /></td>
                </tr>
                {messages.slice(currentPage * messagesPerPage, (currentPage + 1) * messagesPerPage).map((message, index) => (
                    <tr key={index}>
                        <td><input type="checkbox" checked={message.checked} /></td>
                        <td>{message.flaged ? <FlagedLogo /> : <FlagLogo />}</td>
                        <td>{message.important ? <AlertLogo /> : ''}</td>
                        <td>{message.unreplied ? <CornerUpLeftLogo /> : ''}</td>
                        <td className="tableBody">{message.from}</td>
                        <td className="tableBody">{message.subject}</td>
                        <td className="tableBody">{message.date.toLocaleTimeString()}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='7'>
                        <div className="currentPage">Page {currentPage} of {pageCount}</div>
                        <div className="messagesPerPage">Results per pages</div>
                        <div className="pagination">
                            <LeftLogo />
                            <div className="page">1</div>
                            <div className="page">2</div>
                            <div className="page">3</div>
                            <RightLogo />
                        </div>
                    </td>
                </tr>
            </tfoot>
        </table>
    );
}

Table.propTypes = {
    messages: PropTypes.array
};

export default Table;