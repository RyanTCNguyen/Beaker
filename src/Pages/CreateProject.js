import React, { useState } from 'react'
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
    listFunction,
    postFunction,
    getFunction,
    deleteFunction,
    updateFunction,
} from '../EngineFunctions/ProjectsFetch'
import { useAuth0 } from '@auth0/auth0-react'

function CreateProject() {
    const { user } = useAuth0()
    const defaultData = {
        applicants: [],
        creator: user.name,
        description: '',
        groupmembers: [],
        image: '',
        incentives: [],
        members: 1,
        major: [],
        status: '',
        timeline: '',
        title: '',
        year: [],
    }

    const [data, setData] = useState(defaultData)

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const openWidget = (e, widget) => {
        e.preventDefault()
        widget.open()
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
                    <h1 className="left-text-info" id="left-text">
                        Create <br></br> A New <br></br> Project!
                    </h1>
                </div>
                <div className="middle-screen"></div>
                <div className="right-screen-proj">
                    <img className="profile-image" src={beaker} alt="logo" />
                    <h1 className="new-user">New Project</h1>
                    <p className="profile">Project Image</p>
                    <FormControl inputref={data.title} />
                    <div className="project-name">
                        <TextField
                            type="text"
                            className="proj-name"
                            label="Project Name"
                            placeholder="Project Name"
                            inputref={data.title}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setData((prevData) => ({
                                    ...data,
                                    title: event.target.value,
                                }))
                            }
                            required
                        />
                    </div>
                    <FormControl inputref={data.description} />
                    <div className="project-desc">
                        <TextField
                            multiline
                            rows={6}
                            label="Project Description"
                            placeholder="Project Description"
                            inputref={data.description}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setData((prevData) => ({
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
                                value={data.members}
                                onChange={(event) =>
                                    setData((prevData) => ({
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
                                value={data.major}
                                onChange={(event) =>
                                    setData((prevData) => ({
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
                                value={data.year}
                                onChange={(event) =>
                                    setData((prevData) => ({
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
                    <div className="timeline-dropdown">
                        <FormControl style={{ width: '55%' }}>
                            <InputLabel>Project Timeline</InputLabel>
                            <Select
                                inputref={data.timeline}
                                onChange={(event) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        year: event.target.value,
                                    }))
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
                                value={data.incentives}
                                onChange={(event) =>
                                    setData((prevData) => ({
                                        ...prevData,
                                        incentives: event.target.value,
                                    }))
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
                                postFunction('posts-engine', data)
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

export default CreateProject
