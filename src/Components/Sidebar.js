import React, { useState } from 'react'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Avatar } from '@mui/material';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import { userData } from '../Data/Data';


function Sidebar() {
    const [friendList, setFriendList] = useState(userData.friends)
    return (
        <div className='responsive'>
            <div className='Navigation-list'>
                <div className='Logo'>
                    <StarsRoundedIcon color='secondary' />
                    <h1>Coursue</h1>
                </div>
                <nav className='Navlist'>
                <p className='Secondary-color' >OVERVIEW</p>
                    <li className='Navlink'><SpaceDashboardIcon /> <strong>Dashboard</strong></li>
                    <li className='Navlink'><InboxOutlinedIcon /> <strong>Inbox</strong></li>
                    <li className='Navlink'><PlayLessonOutlinedIcon /> <strong>Lesson</strong></li>
                    <li className='Navlink'><ListAltIcon /> <strong>Task</strong></li>
                    <li className='Navlink'><PeopleOutlineOutlinedIcon /> <strong>Group</strong></li>
                </nav>
                <div className='Friend-list'>
                    <p className='Secondary-color'>FRIENDS</p>
                    {
                        friendList.map((friend) => (
                            <li className='Friend-info' key={friend.id}>
                                <Avatar src={friend.imageUrl} />
                                <span>
                                    <p>{friend.friendName}</p>
                                    <p className='Secondary-color'>{friend.friendType}</p>
                                </span>
                            </li>
                        ))
                    }
                </div>
                <div className='Setting'>
                <p className='Secondary-color'>SETTINGS</p>
                    <nav className='Navlist'>
                        <li className='Navlink'><SettingsOutlinedIcon /> <strong>Setting</strong></li>
                        <li className='Navlink' style={{ color: 'orange' }}><LogoutOutlinedIcon /> <strong>Logout</strong></li>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
