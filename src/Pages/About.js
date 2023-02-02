import React from 'react'
import '../Styles/About.css'
import beakerLogo from '../Images/blackBeakerLogoBgRemoved.png'
import createProjectSS from '../Images/CreateProjectSS.png'
import createProfileSS from '../Images/CreateProfileSS.png'
import projectPageSS from '../Images/ProjectPageSS.png'
import Layout from '../Components/Layout'
import { borders } from '@mui/system'
import { shadows } from '@mui/system'
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
                    gridTemplateColumns: '30% 40% 30%',
                    gridTemplateAreas:
                        '"header header header" "message1 message2 message3" "footer footer footer"',
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
                <Box
                    sx={{
                        gridArea: 'footer',
                        textAlign: 'center',
                        fontSize: '24px',
                    }}
                >
                    {' '}
                    Scroll for more
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    marginTop: '150px',
                    gridTemplateColumns: '50% 50%',
                    gridTemplateAreas:
                        '"photo1 message4" "message5 photo2" "photo3 message6"',
                    rowGap: 10,
                    columnGap: 0,
                }}
            >
                {' '}
                <Box
                    component="img"
                    sx={{
                        gridArea: 'photo3',
                        textAlign: 'center',
                        margin: '50px',
                        height: '80%',
                        width: '80%',
                        objectFit: 'contain',
                    }}
                    alt="createprofile"
                    src={createProfileSS}
                ></Box>
                <Box
                    sx={{
                        gridArea: 'message6',
                        backgroundColor: '#AB0C2F',
                        textAlign: 'center',
                        margin: '50px',
                        padding: '20px',
                        fontSize: '32px',
                        borderRadius: '50%',
                    }}
                >
                    <p className="infoTitle"> Customize your Profile </p>
                    <p className="info">
                        Create your profile to show off your skills.
                    </p>
                </Box>
                <Box
                    component="img"
                    sx={{
                        gridArea: 'photo1',
                        textAlign: 'center',
                        margin: '50px',
                        height: '80%',
                        width: '80%',
                        objectFit: 'contain',
                    }}
                    alt="projectpage"
                    src={projectPageSS}
                ></Box>
                <Box
                    sx={{
                        gridArea: 'message4',
                        backgroundColor: '#AB0C2F',
                        textAlign: 'center',
                        margin: '50px',
                        padding: '20px',
                        fontSize: '32px',
                        borderRadius: '50%',
                    }}
                >
                    <p className="infoTitle"> Explore Projects </p>
                    <p className="info">
                        View projects posted by LMU students and faculty.
                    </p>
                </Box>
                <Box
                    component="img"
                    sx={{
                        gridArea: 'photo2',

                        textAlign: 'center',
                        margin: 'auto',
                        height: '80%',
                        width: '80%',
                        objectFit: 'contain',
                    }}
                    alt="createproject"
                    src={createProjectSS}
                ></Box>
                <Box
                    sx={{
                        gridArea: 'message5',
                        backgroundColor: '#0076A5',
                        textAlign: 'center',
                        margin: '50px',
                        padding: '20px',
                        fontSize: '32px',
                        borderRadius: '50%',
                    }}
                >
                    <p className="infoTitle"> Create a Project </p>
                    <p className="info">
                        Create a project with all your necessary information.
                    </p>
                </Box>
            </Box>
        </Layout>
    )
}

export default About
