import React from 'react'
import Navbar from './Navbar'
import Statisticbar from './Statisticbar'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Table from './Table';
import Course from './Course';
import Video from './Video';
import { Button } from '@mui/material';


function Content() {
    return (
        <div>
            <Navbar className="Navbar" />
            <div className='Main-content'>
                <div style={{maxWidth:'70%'}}>
                <div className='Container'>
                    <div className='Header-components'>
                        <p>ONLINE COURSE</p>
                        <h1>Sharpen Your Skills With Professional Online Courses</h1>
                        <Button sx={{ backgroundColor: 'black', borderRadius: '10px' }} className='Join-button' variant="contained" endIcon={<NavigateNextIcon />}> Join Now</Button>
                    </div>
                    <section>
                        <Course/>
                    </section>
                    <section>
                        <Video/>
                    </section>
                    <section>
                        <div className='Continue-heading'>
                            <h1>Your lessons</h1>
                            <a href="#">See all</a>
                        </div>
                        <Table/>
                    </section>
                </div>
                </div>

                <div>
                    <Statisticbar className="Statisticbar" />
                </div>

            </div>


        </div>
    )
}

export default Content
