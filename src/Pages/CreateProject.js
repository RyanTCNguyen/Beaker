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
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {
    postFunction
} from '../EngineFunctions/ProjectsFetch'
import { useHistory } from 'react-router-dom'

function CreateProject({user}) {
    console.log(user)
    const defaultData = {
        applicants: [],
        creator: user.id,
        createdby:'',
        description: '',
        groupmembers: [user.id],
        image: '',
        incentives: [],
        members: 1,
        major: [],
        status: 'Open',
        timeline: [dayjs(),dayjs()],
        title: '',
        year: [],
    }

    const [data, setData] = useState(defaultData)

    const [open, setOpen] = useState(false)

    let history = useHistory()

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
                    <div className="creator-name">
                        <TextField
                            type="text"
                            className="creator-name"
                            label="Creator Name"
                            placeholder="Creator Name"
                            inputref={data.createdby}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setData((prevData) => ({
                                    ...data,
                                    createdby: event.target.value,
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
                    <br></br>
                    <div className="image-link">
                        <TextField
                            type="text"
                            className="image-link"
                            label="Image Link"
                            placeholder="Image Link"
                            inputref={data.image}
                            style={{ width: '55%' }}
                            onChange={(event) =>
                                setData((prevData) => ({
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
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <div>
                                <DatePicker format="DD-MM-YYYY" label="Start Date" value={data.timeline[0]} onChange={(startDate) => {
                                    let temp = data.timeline
                                    temp[0] = startDate
                                    setData({...data, timeline:temp})
                                }}/>
                                <DatePicker format="DD-MM-YYYY" label="End Date" value={data.timeline[1]} onChange={(endDate) => {
                                    let temp = data.timeline
                                    temp[1] = endDate
                                    setData({...data, timeline:temp})
                                }}/>
                            </div>
                            </LocalizationProvider>
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
                                postFunction('posts-engine', data).then(() => {
                                    history.push('./projectspage')
                                })
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
