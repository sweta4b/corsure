import { Avatar, Button, Fab } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import React, { useState } from 'react';
import BarChart from './Chart';
import { mentorData, userData } from '../Data/Data';


function Statisticbar() {
    const [user, setUser] = useState(userData);
    const [mentors, setMentors] = useState(mentorData)
    return (
        <div className='Status'>
            <div className='Status-bar'>
                <h1>Statistic</h1>
                <MoreVertIcon className='Secondary-color' />
            </div>
            <div className='User-info'>
            <div className='Circular-bar'>
          <img src={user.profileUrl} alt="" style={{height:'200px', borderRadius:'50%'}} /> 
          <div className="Percentage-overlay">
            <p>65%</p>
          </div>
          </div>
                
                <h2>Good Morning {user.userFirstName}</h2>
                <p className='Secondary-color'>Continue your learning to achieve your target!</p>
            </div>
            <div className='Graph-bar'>
                <BarChart />
            </div>
            <div className='Mentor'>
                <h1>Your mentor</h1>
                <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div>
            <div className='Mentor-list'>
                {
                    mentors.map((mentor) => (
                        <>
                        <li className='Mentor-info'>
                            <Avatar src={mentor.imageUrl} />
                            <span style={{textAlign:'left'}}>
                                <p>{mentor.mentorName}</p>
                                <p className='Secondary-color'>Mentor</p>
                            </span>
                            <Button size='small' sx={{ borderRadius: '20px', fontSize:'small', marginLeft:'auto'  }} startIcon={<PersonAddAltIcon />} variant="outlined" color='secondary'>Follow</Button>
                        </li>
                        <div className='line'></div>
                        </>
                    ))
                }
                <Button color='secondary' sx={{backgroundColor:'#eba8f78e', borderRadius:'20px'}}>See All</Button>
            </div>
        </div>
    )
}

export default Statisticbar
