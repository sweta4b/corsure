import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { videoData } from '../Data/Data';

function Video() {
    const [videos, setVideos] = useState(videoData);

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [likedVideos, setLikedVideos] = useState([])

    const showNextVideo = (next) => {
        const newIndex = next
            ? (currentVideoIndex + 1) % videos.length
            : (currentVideoIndex - 1 + videos.length) % videos.length;

        setCurrentVideoIndex(newIndex);

        // Scroll to the next video
        const videoElement = document.getElementById(`video-${newIndex}`);
        videoElement && videoElement.scrollIntoView({ behavior: 'smooth' });
    };

    const likeVideo = (selectedVideo) => {
        setLikedVideos((videos) => [...videos, selectedVideo])
    };

    const dishLikeVideo = (id) => {
        setLikedVideos((videos) => videos.filter((video) => video.id !== id))
    }

    return (
        <>
            <div className='Continue-heading'>
                <h1>Continue Watching</h1>
                <div>
                    <ArrowBackIosRoundedIcon color='secondary' onClick={() => showNextVideo(false)} />
                    <ArrowForwardIosRoundedIcon color='secondary' onClick={() => showNextVideo(true)} />
                </div>
            </div>
            <div className='Continue-watching'>
                {
                    videos.map((video, index) => (
                        <li className='Video-Detail' key={video.id} id={`video-${index}`}>
                            <div className='Image-container'>
                                <img src={video.videoUrl} alt="" style={{ borderRadius: '10px', height: '100%', width: '100%' }} />
                                <FavoriteBorderOutlinedIcon
                                    sx={{ color: likedVideos.includes(video) ? 'red' : 'white' }}
                                    fontSize='small'
                                    className='Like-icon'
                                    onClick={() => likedVideos.includes(video) ? dishLikeVideo(video.id) : likeVideo(video)}
                                />
                            </div>
                            <p>{video.title}</p>
                            <p className={video.type === 'Frontend' ? 'Tag3' : video.type === 'Branding' ? 'Tag2' : 'Tag'}>{video.type.toUpperCase()}</p>
                            <progress value={video.progress} max="100"> </progress>
                            <div className='Video-mentor'>
                                <Avatar src={video.mentor.imageUrl} />
                                <span>
                                    <p>{video.mentor.mentorName}</p>
                                    <p className='Secondary-color'>Mentor</p>
                                </span>
                            </div>
                        </li>
                    ))
                }
            </div>
        </>
    )
}

export default Video
