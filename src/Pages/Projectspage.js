import React from 'react'
import NavFormat from '../Components/NavFormat'
import { Typography } from '@material-ui/core'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom'
import '../Styles/Projectspage.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import ProjectTable from '../Components/ProjectTable'
import 'firebase/firestore'
import { useAuth0 } from '@auth0/auth0-react'

function Projectspage({ projects }) {
    const { isAuthenticated } = useAuth0()

    return (
        <NavFormat>
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
                <Typography id="Title" className="subTitle">
                    {' '}
                    Active Projects{' '}
                </Typography>
            </div>

            <div style={{ paddingLeft: '10vw', paddingRight: '10vw' }}>
                {<ProjectTable projects={projects} />}
            </div>
        </NavFormat>
    )
}

export default Projectspage
