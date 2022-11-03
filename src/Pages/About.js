import React from 'react'
import '../Styles/About.css'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'

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
            <div className="aboutMsg">
                <Box
                    component="img"
                    sx={{
                        height: 100,
                        width: 100,
                        paddingTop: '20px',
                        textAlign: 'center',
                    }}
                    alt="logo"
                    src={beaker}
                />
                <h2 className="title"> Beaker </h2>
                <h4 className="subTitle">
                    LMU's very own hub for research and collaboration
                </h4>
                <p className="message">
                    "Post projects and see who matches your project
                    qualifications" <br></br> "Get seen by those who are looking
                    for someone just like you" <br></br> "Get connected with
                    people outside of your major"
                </p>
            </div>
        </Layout>
    )
}

export default About
