import React, { useState, useEffect } from 'react'
import ProjectCards from '../Components/ProjectCards'
import Layout from '../Components/Layout'
import { Typography } from '@material-ui/core'
import { IconButton } from '@mui/material'
// import projects from '../projectsdata'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import '../Styles/Projectspage.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Button from '@mui/material/Button'
// import { collection, query, where, getDocs, doc } from 'firebase/firestore'
import ProjectTable from '../Components/ProjectsTable'
import ProjectTableNew from '../Components/ProjectTableNew'
import 'firebase/firestore'
// import { keyframes } from '@mui/styled-engine'
import { Add } from '@mui/icons-material'
// import firebase from '../firebase'

// SM: It looks like some of these imports are not being used, it
//     would probably be best to delete them to keep the file cleaner

const useStyles = makeStyles({
    title: { textAlign: 'left' },

    mainTitle: { textAlign: 'left', fontSize: '55px', fontWeight: 'lighter' },
})

function Projectspage({ projects }) {
    const classes = useStyles()
    const [browse, setBrowse] = useState([])
    const [profiles, setProfiles] = useState([])
    const [bookmarks, setBookmarks] = useState([])

    useEffect(() => {
        //fetch data from server
        // fetchprojects();
        const browse = projects.filter((project) => project.type === 'browse')
        const profile = projects.filter((project) => project.type === 'profile')
        const bookmarked = projects.filter(
            (project) => project.type === 'bookmarked'
        )

        setBrowse(browse)
        setProfiles(profile)
        setBookmarks(bookmarked)
    }, [projects])

    return (
        <Layout>
            <div>
                <Typography id="Title">
                    {' '}
                    Projects{' '}
                    <Link to="/createproject">
                        <IconButton
                            style={{
                                position: 'absolute',
                                left: '70rem',
                                paddingTop: '30px',
                            }}
                            aria-label="upload picture"
                            component="span"
                        >
                            <AddCircleIcon
                                style={{
                                    color: 'rgba(16, 127, 183, 1)',
                                    fontSize: '50px',
                                }}
                            />
                        </IconButton>
                    </Link>
                </Typography>
            </div>

            <div>
                {/* <Typography className={classes.title}>
                    Based on your profile <br></br>{' '}
                    <Link
                        style={{
                            color: 'rgba(16, 127, 183, 1)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontStyle: 'italic',
                        }}
                        to="/basedonprofile"
                    >
                        {' '}
                        See more{' '}
                    </Link>
                </Typography> */}
                {/* <Typography className={classes.title}>
                    Browse projects <br></br>{' '}
                    <Link
                        style={{
                            color: 'rgba(16, 127, 183, 1)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontStyle: 'italic',
                        }}
                        to="/browse"
                    >
                        {' '}
                        See more{' '}
                    </Link>
                </Typography> */}
                {/* <ProjectCards projects={profiles} /> */}

                {/* <ProjectCards projects={browse} /> */}
                {<ProjectTableNew projects={projects} />}
            </div>
        </Layout>
    )
}

export default Projectspage
