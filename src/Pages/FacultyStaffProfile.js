import React, { useState } from 'react'
import '../Styles/Profile.css'
import Button from '@mui/material/Button'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import { Link, useHistory } from 'react-router-dom'
import 'firebase/firestore'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { postFunction } from '../EngineFunctions/ProjectsFetch'
import { useAuth0 } from '@auth0/auth0-react'

const defaultUser = {
    firstname: '',
    title: '',
    middlename: '',
    email: '',
    lastname: '',
    nickname: '',
    major: null,
    minor: null,
    link: '',
    resume: null,
    softskills: null,
    bio: '',
    year: null,
    pronouns: '',
    url: '',
    student: false,
    users: [],
    department: [],
}

export default function FacultyStaffProfile({
    user = defaultUser,
    editing = false,
    type = 'New User',
    redirect = true,
}) {
    const editStyle = () => {
        if (editing) {
            return { paddingLeft: '30vw' }
        } else return {}
    }
    let history = useHistory()
    const [currentUser, setCurrentUser] = useState({ ...defaultUser, ...user })
    const { user: authUser } = useAuth0()

    const handleChangeDepartment = (event) => {
        setCurrentUser({ ...user, department: event.target.value })
    }

    const submitUser = (e) => {
        e.preventDefault()
        console.log(currentUser)
        const requiredFields = ['firstname', 'lastname', 'department']
        let missing = 0
        requiredFields.forEach((n) => {
            if (currentUser[n] === defaultUser[n]) {
                missing++
                console.log(`Missing: ${n}`)
            }
        })
        postFunction('profiles-engine', {
            ...currentUser,
            email: authUser.email,
        })
        console.log('POSTED')

        if (redirect) {
            history.push('/dashboard')
        } else {
            window.location.reload()
        }

        console.log(`Missing ${missing} Fields`)
    }

    const departmentOptions = [
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

    return (
        <div className="new-profile">
            {editing ? (
                <></>
            ) : (
                <div className="left-screen-fs">
                    <h1 className="left-text-info" id="left-text">
                        Create <br></br> Your <br></br> Profile
                    </h1>
                </div>
            )}
            <div className="right-screen" style={editStyle()}>
                <img className="profile-image" style={{background:'rgba(255,255,255,0.8)', borderRadius:'0.25rem' }} src={beaker} alt="logo" />
                <p className="subTitle" >{type+' Profile'} </p>
                {/* <div>
                    <img
                        style={{
                            width: 250,
                            height: 250,
                            clipPath: 'circle()',

                            paddingTop: 0,
                        }}
                        alt="profile"
                        src={facultyImageAsUrl}
                        onClick={(e) => openWidget(e, widget)}
                    />
                </div> */}
                <FormControl />
                <div className="fs-title">
                    <TextField
                        value={currentUser.title}
                        required={true}
                        type="text"
                        label="Title (Ex: Professor)"
                        placeholder="Title (Ex: Professor)"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                title: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="fs-first-name">
                    <TextField
                        value={currentUser.firstname}
                        required
                        type="text"
                        label="First Name(s)"
                        placeholder="First Name(s)"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                firstname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="fs-middle-name">
                    <TextField
                        value={currentUser.middlename}
                        type="text"
                        label="Middle Name(s)"
                        placeholder="Middle Name(s)"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                middlename: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="fs-last-name">
                    <TextField
                        value={currentUser.lastname}
                        required
                        type="text"
                        label="Last Name(s)"
                        placeholder="Last Name(s)"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                lastname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="fs-preferred-name">
                    <TextField
                        value={currentUser.nickname}
                        type="text"
                        label="Preferred way to be addressed"
                        placeholder="Preferred way to be addressed"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                nickname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="fs-pronouns">
                    <TextField
                        value={currentUser.pronouns}
                        type="text"
                        label="Pronouns (Ex: she/her)"
                        placeholder="Pronouns (Ex: she/her)"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                pronouns: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className="department-options">
                    <FormControl style={{ width: '55%', background:'rgba(255,255,255,0.8)', borderRadius:'.25rem'  }}>
                        <InputLabel style={{backgroundColor:'white', paddingLeft: '4px', paddingRight: '4px'}}> Department </InputLabel>
                        <Select
                            multiple
                            value={[currentUser.department]}
                            onChange={handleChangeDepartment}
                        >
                            {departmentOptions.map((departmentOption) => (
                                <MenuItem
                                    key={departmentOption}
                                    value={departmentOption}
                                >
                                    {departmentOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <FormControl />

                {/* <label className="resume">Upload CV or Resume</label> */}
                <FormControl />
                <div className="fs-portfolio">
                    <TextField
                        value={currentUser.resume}
                        type="text"
                        label="Link to Portfolio/Website"
                        placeholder="Link to Portfolio/Website"
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem'  }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                link: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className="done">
                    <Link className="button-link" to="/projectspage">
                        <Button
                            className="done-btn1"
                            size="large"
                            color="primary"
                            variant="contained"
                            onClick={(e) => {
                                submitUser(e)
                            }}
                        >
                            Done
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
