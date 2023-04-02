import React from 'react'
import Layout from '../Components/Layout'
import { Typography } from '@material-ui/core'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Styles/Projectspage.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ProjectTableNew from '../Components/ProjectTableNew'
import 'firebase/firestore'
import { useAuth0 } from '@auth0/auth0-react'

function Projectspage({ projects }) {
    const { isAuthenticated } = useAuth0()

    return (
        <Layout >
            <div>
                {isAuthenticated ? (
                        <Link to="/createproject">
                            <IconButton
                                style={{
                                    position: 'absolute',
                                    right: '10vw',
                                    margin: '10px',
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
                    ) : null}
                <Typography id="Title">
                    {' '}
                    Active Projects{' '}
                    
                </Typography>
                
            </div>

            <div style={{paddingLeft: '10vw', paddingRight: '10vw'}}>{<ProjectTableNew projects={projects} />}</div>
        </Layout>
    )
}

export default Projectspage
