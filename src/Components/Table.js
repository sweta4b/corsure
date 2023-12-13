import React, { useState } from 'react'
import NextPlanOutlinedIcon from '@mui/icons-material/NextPlanOutlined';
import { lessonData } from '../Data/Data';
import { Avatar } from '@mui/material';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import BrandingWatermarkOutlinedIcon from '@mui/icons-material/BrandingWatermarkOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';

function Table() {
    const [tableData, setTableData] = useState(lessonData)

    return (
        <div className='Mentor-table'>
            <table>
                <tbody>
                    <tr>
                        <th>Mentor</th>
                        <th>Type</th>
                        <th>Desc</th>
                        <th>Action</th>
                    </tr>
                    {
                        tableData.map((lesson) => (
                            <tr key={lesson.id}>
                                <td><span style={{ display: 'flex', alignItems: 'center', gap: '20px' }}><Avatar src={lesson.imageUrl}></Avatar>{lesson.mentorName}</span></td>
                                <td><span className={lesson.type === 'Frontend' ? 'Tag3' : lesson.type === 'Branding' ? 'Tag2' : 'Tag'} >
                                    {lesson.type === 'Branding' ? <BrandingWatermarkOutlinedIcon sx={{ color: '#5052e4', fontSize: 'small', marginRight: '5px' }} /> : lesson.type === 'Frontend' ? <CodeOutlinedIcon sx={{ color: '#1289d8', fontSize: 'small', marginRight: '5px' }} /> : <DesignServicesOutlinedIcon color='secondary' sx={{ fontSize: 'small', marginRight: '5px' }} />}
                                    {lesson.type.toUpperCase()}
                                </span></td>
                                <td>{lesson.description}</td>
                                <td><NextPlanOutlinedIcon color='secondary' /></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
