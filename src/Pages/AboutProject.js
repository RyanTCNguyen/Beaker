import React, { useState, useEffect } from 'react'
import '../Styles/LearnMore.css'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import TelegramIcon from '@mui/icons-material/Telegram'
import NavFormat from '../Components/NavFormat'
import { IconButton } from '@mui/material'
import { postFunction } from '../EngineFunctions/ProjectsFetch'
import ProjectApplication from './ProjectApplication'
//import 'src/Styles/AboutProject.css'

function AboutProject({ match, projects, user }) {
    const [project, setProject] = useState({})
    const [applicationPopUp, setApplicationPopUp] = useState(false)
    const id = match.params.projectId

    let tempBookmarked = []
    let index = ''
    const submitBookmarked = () => {
        tempBookmarked = user.bookmarked
        index = tempBookmarked.indexOf(id)
        if (index > -1) {
            tempBookmarked.splice(index, 1)
            postFunction('profiles-engine', {
                ...user,
                bookmarked: tempBookmarked,
            })
        } else {
            tempBookmarked.push(id)
            postFunction('profiles-engine', {
                ...user,
                bookmarked: tempBookmarked,
            })
        }
    }

    useEffect(() => {
        //send the network request to retrieve data for this project
        const selected = projects.filter((project) => project.id === id)[0]
        setProject(selected)
    }, [id, projects])

    return (
        <NavFormat>
            <div>
                <div style={{ margin: '20px' }}>
                    <Link to="/projectspage">
                        <ArrowBackIosIcon></ArrowBackIosIcon>
                    </Link>
                </div>
                {project && (
                    <div className="about-container">
                        <div className="column-left">
                            {' '}
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '40vw',
                                }}
                            />{' '}
                        </div>
                        <div className="column-right">
                            <div
                                style={{
                                    fontSize: '50px',
                                    paddingBottom: '10px',
                                    textAlign: 'center',
                                }}
                            >
                                {project.title}
                            </div>
                            <div
                                style={{
                                    fontSize: '18px',
                                    fontStyle: 'italic',
                                    paddingBottom: '20px',
                                    textAlign: 'center',
                                }}
                            >
                                Created by: {project.creator}
                            </div>
                            <br></br>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                    paddingBottom: '10px',
                                }}
                            >
                                <strong> Desired Major(s): </strong>{' '}
                                {project.major}
                            </div>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                    paddingBottom: '10px',
                                }}
                            >
                                {project.softskills}
                            </div>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                    paddingBottom: '10px',
                                }}
                            >
                                <strong> Project Timeline: </strong>{' '}
                                {project.timeline}
                            </div>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                    paddingBottom: '10px',
                                }}
                            >
                                {project.incentives}
                            </div>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                    paddingBottom: '10px',
                                }}
                            >
                                <strong> Desired Year(s):</strong>{' '}
                                {project.year}
                            </div>
                            <br></br>
                            <div
                                style={{
                                    fontSize: '16px',
                                    maxWidth: '600px',
                                }}
                            >
                                {project.description}
                            </div>

                            <Grid
                                className="action-items"
                                direction="row"
                                justifyContent="space-between"
                            >
                                <div>
                                    <IconButton>
                                        <HighlightOffIcon
                                            fontSize="large"
                                            style={{
                                                color: 'rgba(16, 127, 183, 1)',
                                            }}
                                        ></HighlightOffIcon>
                                        <div
                                            style={{
                                                fontSize: '10px',
                                                alignContent: 'center',
                                            }}
                                        >
                                            {/* Not a fit */}
                                        </div>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton
                                        onClick={() => {
                                            setApplicationPopUp(
                                                !applicationPopUp
                                            )
                                        }}
                                    >
                                        <TelegramIcon
                                            fontSize="large"
                                            style={{
                                                color: 'rgba(172, 12, 48, 1)',
                                            }}
                                        >
                                            {' '}
                                        </TelegramIcon>
                                        <div style={{ fontSize: '10px' }}>
                                            {/* I'm Interested! */}
                                        </div>
                                    </IconButton>
                                </div>
                                <div>
                                    <IconButton
                                        onClick={() => submitBookmarked()}
                                    >
                                        <BookmarkBorderIcon fontSize="large"></BookmarkBorderIcon>
                                        <div style={{ fontSize: '10px' }}>
                                            {/* Bookmark */}
                                        </div>
                                    </IconButton>
                                </div>
                                {project.creator === user.email && (
                                    <div>
                                        <Link to={`/editproject/${project.id}`}>
                                            <IconButton>
                                                <EditOutlinedIcon fontSize="large"></EditOutlinedIcon>
                                                <div
                                                    style={{ fontSize: '10px' }}
                                                ></div>
                                            </IconButton>
                                        </Link>
                                    </div>
                                )}
                            </Grid>
                        </div>
                    </div>
                )}
            </div>
            <div>
                {applicationPopUp ? (
                    <ProjectApplication id={project?.id} email={user.email} />
                ) : (
                    <></>
                )}
            </div>
        </NavFormat>
    )
}

export default AboutProject
