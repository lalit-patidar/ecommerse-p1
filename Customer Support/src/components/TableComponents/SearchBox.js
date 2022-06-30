import React from 'react';
import './SearchBox.css';

import Select from './Select';

const SearchBox = () => {
    return (
        <div className="SearchBox">
            Username / Agent ID<br />
            <input></input>
            Subject
            <input></input>
            <div className='dateBox'>
                <div className='from'>
                    From<br />
                    <input type="date"></input>
                </div>
                <div className='to'>
                    To<br />
                    <input type="date"></input>
                </div>
            </div>
            Include<br />
            <Select value="Inbox: All messages" options={['Example', 'Inbox: From members', 'Inbox: From support agents', 'Inbox: All messages', 'Sent', 'Trash', 'Example', 'Example', 'Example', 'Example for longer']} />
        </div>
    );
}

export default SearchBox;