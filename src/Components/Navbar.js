import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge } from '@mui/material';
import { userData } from '../Data/Data';

function Navbar() {
    const [user, setUser] = useState(userData);
    return (
        <div className='Toolbar'>
            <div className='Searchbar'>
                <SearchIcon />
                <input
                    placeholder='Search your courses'
                />
            </div>
            <div className='Navicon'>
                <div className='Iconholder'>
                    <EmailIcon />
                </div>
                <div className='Iconholder'>
                    <Badge color="secondary" variant="dot">
                        <NotificationsIcon />
                    </Badge>
                </div>
            </div>
            <div className='Vertical-line'></div>
            <div className='Usericon'>
                <Avatar src={user.profileUrl} className="User-profile"/>
                <p>{user.userFirstName} {user.userLastName} </p>
            </div>
        </div>
    )
}

export default Navbar
