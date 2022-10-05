import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import { Typography } from '@material-ui/core'
import { IconButton } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'
import '../Styles/Projectspage.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ProjectTableNew from '../Components/ProjectTableNew'
import 'firebase/firestore'
<<<<<<< HEAD
import { Add } from '@mui/icons-material'
// import firebase from '../firebase'
=======
>>>>>>> develop

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

            <div>{<ProjectTableNew projects={projects} />}</div>
        </Layout>
    )
}

export default Projectspage
