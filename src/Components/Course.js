import MoreVert from '@mui/icons-material/MoreVert'
import { Avatar } from '@mui/material'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import React, { useState } from 'react'
import { courseData } from '../Data/Data'

function Course() {
    const [courses, setCourses] = useState(courseData)
    return (
        <div className='Course-list'>
            {
                courses.map((course) => (
                    <li className='Course-Detail' key={course.id}>
                        {
                            course.type === 'Branding' ? (
                                <Avatar sx={{ backgroundColor: '#7f90f38e' }}>
                                    <BrandingWatermarkOutlinedIcon sx={{color:'#5052e4'}} />
                                </Avatar>) : course.type === 'Frontend' ? (
                                    <Avatar sx={{ backgroundColor: '#6bcbf18e' }}>
                                        <CodeOutlinedIcon sx={{color:'#1289d8'}} />
                                    </Avatar>
                                ) : <Avatar sx={{ backgroundColor: '#eba8f78e' }}>
                                <DesignServicesOutlinedIcon color='secondary' />
                            </Avatar>
                        }

                        <span>
                            <p className='Secondary-color'>{course.watchedVideos}/{course.totalVideos} watched</p>
                            <p>{course.type}</p>
                        </span>
                        <MoreVert className='Secondary-color' />
                    </li>
                ))
            }
        </div>

    )
}

export default Course
