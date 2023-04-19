import React, { useState, useEffect } from 'react'
import '../Styles/Profile.css'
import Button from '@mui/material/Button'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import RequiredDialog from '../Components/RequiredDialog'
import {
    postFunction
} from '../EngineFunctions/ProjectsFetch'
import { useAuth0 } from '@auth0/auth0-react'

function EditProject({ match, projects }) {
    const id = match.params.projectId
    //const location = useLocation()
    //const id = new URLSearchParams(location.search)
    
    const { user } = useAuth0()

    useEffect(() => {
        //send the network request to retrieve data for this project
        const selected = projects.filter((project) => project.id === id)[0]
        setProject(selected)
    }, [id, projects])

    const defaultProject = {
        applicants: [],
        creator: user?.name,
        description: '',
        groupmembers: [user?.name],
        image: '',
        incentives: [],
        members: 1,
        major: [],
        status: '',
        timeline: '',
        title: '',
        year: [],
    }

    const [project, setProject] = useState(defaultProject)

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const memberAmtOptions = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10+',
    ]

    const majorOptions = [
        'Accounting (ACCT)',
        'African American Studies (AFAM)',
        'Animation (ANIM)',
        'Applied Mathematics',
        'Applied Physics',
        'Art History (ARHS)',
        'Asian and Pacific Studies (ASPA)',
        'Biochemistry',
        'Bioethics (BIOE)',
        'Biology (BIOL)',
        'Business Administration (BADM)',
        'Chemistry (CHEM)',
        'Chicana/o and Latina/o Studies (CLST)',
        'Civil Engineering (CIVL)',
        'Classics and Archaeology (CLAR)',
        'Communication Studies (CMST)',
        'Computer Science (CMSI)',
        'Dance (DANC)',
        'Economics (ECON)',
        'Electrical Engineering (EECE)',
        'English (ENGL)',
        'Entrepreneurship (ENTR)',
        'Environmental Science (ENVS)',
        'Environmental Studies (EVST)',
        'Film and Television Production (PROD)',
        'Film, Television, and Media Studies (FTVS)',
        'Finance (FNCE)',
        'French (FREN)',
        'Health and Human Sciences (HHSC)',
        'History (HIST)',
        'Humanities (HMNT)',
        'Information Systems and Business Analytics (ISBA)',
        'International Relations',
        'Journalism (JOUR)',
        'Liberal Studies (LBST)',
        'Management and Leadership (MGMT)',
        'Marketing (MRKT)',
        'Mathematics (MATH)',
        'Mechanical Engineering (MECH)',
        'Modern Languages (MDLG)',
        'Music (MUSC)',
        'Philosophy (PHIL)',
        'Physics (PHYS)',
        'Political Science (POLS)',
        'Psychology (PSYC)',
        'Recording Arts (RECA)',
        'Screenwriting (SCWR)',
        'Sociology (SOCL)',
        'Spanish (SPAN)',
        'Statistics and Data Science',
        'Studio Arts (ART)',
        'Theatre Arts (THEA)',
        'Theological Studies (THST)',
        'Urban Studies (URBN)',
        'Womens and Gender Studies (WGST)',
    ]

    const yearOptions = [
        'Freshman',
        'Sophomore',
        'Junior',
        'Senior',
        'Graduate',
    ]

    const timelineOptions = [
        '1 Semester',
        '1 Year',
        '2 Years',
        '3 Years',
        '4 Years+',
    ]

    const incentiveOptions = ['Paid', 'Funding Available', 'Internship Credit']
    return (
        <div>
            <div className="new-profile">
                <div className="left-screen-project">
                    <img src={project?.image} alt={project.title}></img>
                </div>
                <div className="middle-screen"></div>
                <div className="right-screen-proj">
                    <img className="profile-image" src={beaker} alt="logo" />
                    <h1 className="new-user">Edit Project</h1>
                    <FormControl inputref={project.title} />
                    <div className="project-name">
                        <TextField
                            type="text"
                            className="proj-name"
                            label="Project Name"
                            placeholder="Project Name"
                            //inputref={data.title}
                            value={project.title}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setProject({
                                    ...project,
                                    title: event.target.value,
                                })
                            }
                            required
                        />
                    </div>
                    <FormControl inputref={project.description} />
                    <div className="project-desc">
                        <TextField
                            multiline
                            rows={6}
                            label="Project Description"
                            placeholder="Project Description"
                            //inputref={data.description}
                            value={project.description}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setProject((prevData) => ({
                                    ...prevData,
                                    description: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div className="members-dropdown">
                        <FormControl style={{ width: '55%' }} required>
                            <InputLabel>Number Of Members Needed</InputLabel>
                            <Select
                                value={project.members}
                                onChange={(event) =>
                                    setProject((prevData) => ({
                                        ...prevData,
                                        members: event.target.value,
                                    }))
                                }
                            >
                                {memberAmtOptions.map((memberAmtOption) => (
                                    <MenuItem
                                        key={memberAmtOption}
                                        value={memberAmtOption}
                                    >
                                        {memberAmtOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="preferred-majors-options">
                        <FormControl style={{ width: '55%' }} required>
                            <InputLabel>Preferred Majors</InputLabel>
                            <Select
                                multiple
                                value={[project.major]}
                                onChange={(event) =>
                                    setProject((prevData) => ({
                                        ...prevData,
                                        major:
                                            typeof event.target.value ===
                                            'string'
                                                ? event.target.value.split(',')
                                                : event.target.value,
                                    }))
                                }
                            >
                                {majorOptions.map((majorOption) => (
                                    <MenuItem
                                        key={majorOption}
                                        value={majorOption}
                                    >
                                        {majorOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="preferred-years-options">
                        <FormControl style={{ width: '55%' }}>
                            <InputLabel>Preferred Years</InputLabel>
                            <Select
                                multiple
                                value={[project.year]}
                                onChange={(event) =>
                                    setProject((prevData) => ({
                                        ...prevData,
                                        year:
                                            typeof event.target.value ===
                                            'string'
                                                ? event.target.value.split(',')
                                                : event.target.value,
                                    }))
                                }
                            >
                                {yearOptions.map((yearOption) => (
                                    <MenuItem
                                        key={yearOption}
                                        value={yearOption}
                                    >
                                        {yearOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <br></br>
                    <div className="image-link">
                        <TextField
                            type="text"
                            className="image-link"
                            label="Image Link"
                            placeholder="Image Link"
                            //inputref={data.image}
                            value={project.image}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setProject((prevData) => ({
                                    ...prevData,
                                    image: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <br></br>
                    <div className="timeline-dropdown">
                        <FormControl style={{ width: '55%' }}>
                            <InputLabel>Project Timeline</InputLabel>
                            <Select
                                //inputref={data.timeline}
                                value={project?.timeline? project.timeline : ''}
                                onChange={(event) =>
                                    setProject({
                                        ...project,
                                        timeline: event.target.value,
                                    })
                                }
                            >
                                {timelineOptions.map((timelineOption) => (
                                    <MenuItem
                                        key={timelineOption}
                                        value={timelineOption}
                                    >
                                        {timelineOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="incentive-options">
                        <FormControl style={{ width: '55%' }}>
                            <InputLabel>Incentives</InputLabel>
                            <Select
                                multiple
                                value={[project.incentives]}
                                onChange={(event) =>
                                    setProject({
                                        ...project,
                                        incentives: event.target.value,
                                    })
                                }
                            >
                                {incentiveOptions.map((incentiveOption) => (
                                    <MenuItem
                                        key={incentiveOption}
                                        value={incentiveOption}
                                    >
                                        {incentiveOption}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="create-proj">
                        <Button
                            className="post-proj-btn1"
                            variant="contained"
                            size="large"
                            onClick={() => {
                                postFunction('posts-engine', project)
                            }}
                        >
                            Post
                        </Button>
                    </div>
                    <RequiredDialog
                        onClickState={open}
                        onClose={handleClose}
                        fields={[
                            'Project Name, Project Description, Number of Members, Preferred Majors',
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default EditProject
