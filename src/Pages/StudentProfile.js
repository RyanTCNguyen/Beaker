import React, { useState } from 'react'
import '../Styles/Profile.css'
import Button from '@mui/material/Button'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import { useHistory } from 'react-router-dom'
import Uploadfile from '../Components/UploadFile'
import '../Styles/Dropdown.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { useAuth0 } from '@auth0/auth0-react'
import { postFunction } from '../EngineFunctions/ProjectsFetch'

const defaultUser = {
    firstname: '',
    middlename: '',
    email: '',
    lastname: '',
    nickname: '',
    major: [],
    minor: [],
    resume: '',
    softskills: '',
    bio: '',
    year: '',
    bookmarked: [],
    pronouns: '',
    student: true,
}

export default function StudentProfile({
    user = defaultUser,
    editing = false,
    type = 'New User',
}) {

    let history = useHistory()
    const { user: authUser } = useAuth0()
    const [currentUser, setCurrentUser] = useState(user)
    const editStyle = () => {
        if (editing) {
            return { paddingLeft: '30vw' }
        } else return {}
    }

    const handleChangeYear = (e) => {
        setCurrentUser({ ...currentUser, year: e.target.value })
    }
    const handleChangeMajor = (e) => {
        const {
            target: { value },
        } = e
        setCurrentUser({
            ...currentUser,
            major: typeof value === 'string' ? value.split(',') : value,
        })
    }

    const handleChangeMinor = (e) => {
        const {
            target: { value },
        } = e
        setCurrentUser({
            ...currentUser,
            minor: typeof value === 'string' ? value.split(',') : value,
        })
    }

    const submitUser = () => {
        console.log(currentUser)
        const requiredFields = ['firstname', 'lastname', 'major', 'year', 'bio']
        let missing = 0
        let missingArr = []
        requiredFields.forEach((n) => {
            if (currentUser[n] === defaultUser[n]) {
                let tempReqField = n
                if (tempReqField === 'firstname') {
                    tempReqField = 'First Name'
                } else if (tempReqField === 'lastname') {
                    tempReqField = 'Last Name'
                } else {
                    tempReqField = n.charAt(0).toUpperCase() + n.slice(1)
                }
                missingArr[missing] = tempReqField
                missing++
            }
        })
        for (let i = 1; i < missingArr.length; i++) {
            missingArr[i] = ` ` + missingArr[i]
        }
        if (missing === 0) {
            postFunction('profiles-engine', {
                ...currentUser,
                email: authUser.email,
            }).then(()=>{
                history.push('/dashboard')
            })
            console.log('POSTED')
            
        } else {
            console.log(`Missing ${missing} Fields`)
            alert(`Missing these required fields: ${missingArr}`)
        }
    }

    const downloadPDF = () => {
        fetch(currentUser.resume).then((response) => {
            response.blob().then((blob) => {
                blob.filename = "TEST.pdf"
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a')
                alink.href = fileURL
                alink.download = `${currentUser.firstname}-Resume.pdf`
                alink.click()
            })
        })
    }

    const yearOptionsSP = [
        'Freshman',
        'Sophomore',
        'Junior',
        'Senior',
        'Graduate',
    ]

    const majorOptionsSP = [
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

    const minorOptions = [
        'Accounting (ACCT)',
        'African American Studies (AFAM)',
        'Animation (ANIM)',
        'Applied Mathematics',
        'Art History (ARHS)',
        'Asian and Pacific Studies (ASPA)',
        'Asian Pacific American Studies (APAM)',
        'Biochemistry',
        'Bioethics (BIOE)',
        'Biology (BIOL)',
        'Business Administration (BADM)',
        'Catholic Studies (CATH)',
        'Chemistry (CHEM)',
        'Chicana/o and Latina/o Studies (CLST)',
        'Chinese (CHIN)',
        'Classics and Archaeology (CLAR)',
        'Computer Science (CMSI)',
        'Dance (DANC)',
        'Economics (ECON)',
        'Electrical Engineering (EECE)',
        'English (ENGL)',
        'Environmental Science (ENVS)',
        'Environmental Studies (EVST)',
        'Film, Television, and Media Studies (FTVS)',
        'Finance (FNCE)',
        'French (FREN)',
        'German (GRMN)',
        'Health and Society (HEAS)',
        'History (HIST)',
        'Interactive, Gaming, and Immersive Media (IGI)',
        'International Business (INBA)',
        'International Documentary Production',
        'International Relations',
        'Irish Studies (IRST)',
        'Italian (ITAL)',
        'Jewish Studies (JWST)',
        'Journalism (JOUR)',
        'Math (MATH)',
        'Modern Greek Studies (MDGK)',
        'Music (MUSC)',
        'Peace and Justice Studies (PJST)',
        'Philosophy (PHIL)',
        'Physics (PHYS)',
        'Political Science (POLS)',
        'Psychology (PSYC)',
        'Public Relations (PRCX)',
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
                <div className="left-screen-student">
                    <h1 className="left-text-info" id="left-text">
                        Create <br></br> Your <br></br> Profile
                    </h1>
                </div>
            )}
            <div style={editStyle()} className="right-screen">
                <img className="profile-image" style={{background:'rgba(255,255,255,0.8)', borderRadius:'.25rem' }} src={beaker} alt="logo" />
                <p className="subTitle" >{type+' Profile'} </p>
                <div>
                    {/*
                        <img
                            style={{
                                width: 250,
                                height: 250,
                                clipPath: 'circle()',
                                paddingTop: 0,
                            }}
                            alt="profile"
                            src={imageAsUrl}
                            onClick={(e) => openWidget(e, widget)}
                        />
                          */}
                </div>
                <FormControl />
                <div className="first-name">
                    <TextField
                        required
                        type="text"
                        label="First Name(s)"
                        placeholder="First Name(s)"
                        defaultValue={currentUser.firstname}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                firstname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="middle-name">
                    <TextField
                        type="text"
                        label="Middle Name(s)"
                        placeholder="Middle Name(s)"
                        defaultValue={currentUser.middlename}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                middlename: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="last-name">
                    <TextField
                        required
                        type="text"
                        label="Last Name(s)"
                        placeholder="Last Name(s)"
                        defaultValue={currentUser.lastname}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                lastname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="preferred-name">
                    <TextField
                        type="text"
                        label="Nickname/Preferred Name"
                        placeholder="Nickname/Preferred Name"
                        defaultValue={currentUser.nickname}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                nickname: e.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="pronouns">
                    <TextField
                        type="text"
                        label="Pronouns (Ex: she/her)"
                        placeholder="Pronouns (Ex: she/her)"
                        defaultValue={currentUser.pronouns}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(e) => {
                            setCurrentUser({
                                ...currentUser,
                                pronouns: e.target.value,
                            })
                        }}
                    />
                </div>
                <div className="year-dropdown">
                    <FormControl required style={{ width: '55%', background:'rgba(255,255,255,0.8)', borderRadius:'.25rem' }}>
                        <InputLabel style={{backgroundColor:'rgba(0,0,0,0(', paddingLeft: '4px', paddingRight: '4px'}}>Year</InputLabel>
                        <Select
                            defaultValue={currentUser.year}
                            onChange={handleChangeYear}
                        >
                            {yearOptionsSP.map((yearOption) => (
                                <MenuItem key={yearOption} value={yearOption}>
                                    {yearOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="major-dropdown">
                    <FormControl required style={{ width: '55%', background:'rgba(255,255,255,0.8)', borderRadius:'.25rem' }}>
                        <InputLabel style={{backgroundColor:'rgba(0,0,0,0(', paddingLeft: '4px', paddingRight: '4px'}}>Major(s)</InputLabel>
                        <Select
                            multiple
                            defaultValue={currentUser.major}
                            onChange={handleChangeMajor}
                        >
                            {majorOptionsSP.map((majorOption) => (
                                <MenuItem key={majorOption} value={majorOption}>
                                    {majorOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="minor-dropdown">
                    <FormControl style={{ width: '55%', background:'rgba(255,255,255,0.8)', borderRadius:'.25rem' }}>
                        <InputLabel style={{backgroundColor:'rgba(0,0,0,0(', paddingLeft: '4px', paddingRight: '4px'}}>Minor(s)</InputLabel>
                        <Select
                            multiple
                            value={currentUser.minor}
                            onChange={handleChangeMinor}
                        >
                            {minorOptions.map((minorOption) => (
                                <MenuItem key={minorOption} value={minorOption}>
                                    {minorOption}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <FormControl />
                <div className="skills">
                    <TextField
                        type="text"
                        label="Soft Skills (separate by commas)"
                        placeholder="Soft Skills (separate by commas)"
                        value={currentUser.softskills}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'1.75rem' }}
                        onChange={(event) => {
                            setCurrentUser({
                                ...currentUser,
                                softskills: event.target.value,
                            })
                        }}
                    />
                </div>
                <FormControl />
                <div className="self-intro">
                    <TextField
                        multiline
                        rows={6}
                        label="Tell us about yourself"
                        placeholder="Tell us about yourself"
                        value={currentUser.bio}
                        style={{ width: '50%', background:'rgba(255,255,255,0.8)', borderRadius:'.25rem' }}
                        onChange={(event) => {
                            setCurrentUser({
                                ...currentUser,
                                bio: event.target.value,
                            })
                        }}
                    />
                </div>
                <label className="resume">Upload CV or Resume</label>
                {
                    <Uploadfile
                        accept="application/pdf"
                        setResume={(resume) => {
                            setCurrentUser({ ...currentUser, resume: resume })
                        }}
                        resume={currentUser.resume}
                    >
                        {' '}
                    </Uploadfile>
                }
                <FormControl />
                {currentUser.resume ? (
                    <Button onClick={() => downloadPDF()}>
                        Download Resume
                    </Button>
                ) : (
                    <></>
                )}
                <div className="done">
                    <Button
                        type="button"
                        className="done-btn1"
                        size="large"
                        variant="contained"
                        onClick={() => submitUser()}
                    >
                        Done
                    </Button>
                </div>
            </div>
        </div>
    )
}
