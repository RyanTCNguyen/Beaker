import React from 'react'
import '../Styles/About.css'
import beakerLogo from '../Images/blackBeakerLogoBgRemoved.png'

import Layout from '../Components/Layout'
import { Typography } from '@material-ui/core'
import { IconButton } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@mui/system'

function About() {
    const useStyles = makeStyles({
        title: { textAlign: 'center', fontStyle: 'bold' },

        subtitle: { textAlign: 'center' },
    })
    return (
        <Layout>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: '33% 34% 33%',
                    gridTemplateAreas:
                        '"header header header" "message1 message2 message3"',
                    rowGap: 10,
                    columnGap: 0,
                }}
            >
                <Box
                    sx={{
                        gridArea: 'header',
                        textAlign: 'center',
                        paddingTop: '50px',
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            textAlign: 'center',
                        }}
                        alt="logo"
                        src={beakerLogo}
                    />
                    <p className="subTitle">
                        LMU's very own hub for research and collaboration
                    </p>
                </Box>
                <Box
                    sx={{
                        gridArea: 'message1',
                        textAlign: 'center',
                        backgroundColor: '#0076A5',
                        fontSize: '32px',
                        margin: '20px',
                    }}
                >
                    <p className="infoTitle">Find Amazing Talent</p>
                    <div className="info">
                        Post projects and see who matches your project
                        qualifications
                    </div>
                </Box>
                <Box
                    sx={{
                        gridArea: 'message2',
                        textAlign: 'center',
                        backgroundColor: '#AB0C2F',
                        fontSize: '32px',
                        margin: '20px',
                    }}
                >
                    <p className="infoTitle">Make Yourself Known</p>
                    <div className="info">
                        Get seen by those who are looking for someone just like
                        you
                    </div>
                </Box>
                <Box
                    sx={{
                        gridArea: 'message3',
                        textAlign: 'center',
                        backgroundColor: '#0076A5',
                        fontSize: '32px',
                        margin: '20px',
                    }}
                >
                    <p className="infoTitle">Make Connections</p>
                    <div className="info">
                        Get connected with people outside of your major
                    </div>
                </Box>
            </Box>
        </Layout>
    )
}

export default About
