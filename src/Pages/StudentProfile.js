import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '../Styles/Profile.css'
import Button from '@mui/material/Button'
import beaker from '../Images/blackLinedBeakerBgRemoved.png'
import { Link } from 'react-router-dom'
import 'firebase/firestore'
import { useAuth0 } from '@auth0/auth0-react'
import { storage } from '../firebase'
import Uploadfile from '../Components/UploadFile'
import '../Styles/Dropdown.css'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import {
    listFunction,
    postFunction,
    getFunction,
    deleteFunction,
    updateFunction,
} from '../EngineFunctions/ProjectsFetch'

const useStyles = makeStyles((theme) => ({
    yearDropdown: {
        color: 'grey',
        textTransform: 'lowercase',
        fontSize: '18px',
        justifyContent: 'end',
    },
    majorDropdown: {
        color: 'grey',
        textTransform: 'lowercase',
        fontSize: '18px',
        justifyContent: 'end',
    },
    minorDropdown: {
        color: 'grey',
        textTransform: 'lowercase',
        fontSize: '18px',
        justifyContent: 'end',
    },
}))

const StudentProfile = () => {
    const { user } = useAuth0()
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [nickname, setNickname] = useState('')
    const [major, setMajor] = useState([])
    const [minor, setMinor] = useState([])
    const [link, setPortfolioLink] = useState(6)
    const [resume, setResume] = useState('')
    const [softskills, setSoftskills] = useState('')
    const [bio, setBio] = useState('')
    const [year, setYear] = useState('')
    const [pronouns, setPronouns] = useState('')
    const [url, setURL] = useState('')
    const [students, setStudents] = useState(true)
    const [users, setUsers] = useState([])
    const defaultData = {
        email: user.email,
        firstname: '',
        middlename: '',
        lastname: '',
        nickname: '',
        major: [],
        minor: [],
        portfoliolink: '',
        resume: '',
        bio: '',
        year: '',
        pronouns: '',
        student: true,
    }

    const [data, setData] = useState(defaultData)

    const [imageAsFile, setImageAsFile] = useState(null)
    const [imageAsUrl, setImageAsUrl] = useState(
        `${process.env.PUBLIC_URL}/projectImages/user.png`
    )

    const handleChangeYear = (e) => {
        setYear(e.target.value)
    }
    const handleChangeMajor = (e) => {
        const {
            target: { value },
        } = e
        setMajor(typeof value === 'string' ? value.split(',') : value)
    }

    const handleChangeMinor = (e) => {
        const {
            target: { value },
        } = e
        setMinor(typeof value === 'string' ? value.split(',') : value)
    }

    const handleUploads = (f) => {
        setResume(f.target.files[0])
    }

    console.log(imageAsFile)
    const handleImageAsFile = (e) => {
        setImageAsFile(e.target.files[0])
    }

    function handleUpload(e) {
        e.preventDefault()
        const ref = storage.ref(`/Images/${imageAsFile.name}`)
        const uploadTask = ref.put(imageAsFile)
        uploadTask.on('state_changed', console.log, console.error, () => {
            ref.getDownloadURL().then((url) => {
                setImageAsFile(null)
                setImageAsUrl(url)
            })
        })
    }
    const classes = useStyles()

    const widget = window.cloudinary.createUploadWidget(
        {
            cloudName: process.env.REACT_APP_CLOUD_NAME,
            uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        },

        (error, result) => {
            console.log('result:', result)
            if (!error && result && result.event === 'success') {
                console.log('Done! Here is the image info: ', result.info)
                setImageAsUrl(result.info.url)
            }
        }
    )

    const openWidget = (e, widget) => {
        e.preventDefault()
        widget.open()
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
            <div className="left-screen-student">
                <h1 className="left-text-info" id="left-text">
                    Create <br></br> Your <br></br> Profile
                </h1>
            </div>
            <div className="right-screen">
                <img className="profile-image" src={beaker} alt="logo" />
                <h1 className="new-user">New User</h1>
                <p className="profile">Profile</p>

                <div>
                    {/* <img
                        style={{
                            width: 250,
                            height: 250,
                            clipPath: 'circle()',
                            paddingTop: 0,
                        }}
                        alt="profile"
                        src={imageAsUrl}
                        onClick={(e) => openWidget(e, widget)}
                    /> */}
                </div>
                {/* <FormControl />
                <div className="first-name">
                    <TextField
                        required
                        type="text"
                        label="First Name(s)"
                        placeholder="First Name(s)"
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setFirstName(event.target.value)
                        }}
                    />
                </div>
                <FormControl />
                <div className="middle-name">
                    <TextField
                        type="text"
                        label="Middle Name(s)"
                        placeholder="Middle Name(s)"
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setMiddleName(event.target.value)
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
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setLastName(event.target.value)
                        }}
                    />
                </div> */}
                <FormControl />
                <div className="preferred-name">
                    <TextField
                        type="text"
                        label="Nickname/Preferred Name"
                        placeholder="Nickname/Preferred Name"
                        defaultValue={nickname}
                        style={{ width: '50%' }}
                        // onChange={handleChange('nickname')}
                    />
                </div>
                <FormControl />
                <div className="pronouns">
                    <TextField
                        type="text"
                        label="Pronouns (Ex: she/her)"
                        placeholder="Pronouns (Ex: she/her)"
                        defaultValue={pronouns}
                        style={{ width: '50%' }}
                        // onChange={handleChange('pronouns')}
                    />
                </div>
                <div className="year-dropdown">
                    <FormControl required style={{ width: '55%' }}>
                        <InputLabel>Year</InputLabel>
                        <Select
                            defaultValue={year}
                            // onChange={handleChange('year')}
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
                    <FormControl required style={{ width: '55%' }}>
                        <InputLabel>Major(s)</InputLabel>
                        <Select
                            multiple
                            defaultValue={major}
                            // onChange={handleChange(major)}
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
                    <FormControl style={{ width: '55%' }}>
                        <InputLabel>Minor(s)</InputLabel>
                        <Select
                            multiple
                            value={minor}
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
                        value={softskills}
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setSoftskills(event.target.value)
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
                        value={bio}
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setBio(event.target.value)
                        }}
                    />
                </div>
                <label className="resume">Upload CV or Resume</label>
                <div></div>
                <br></br>
                <Uploadfile> </Uploadfile>
                <div></div>
                <br></br>
                <FormControl />
                <div className="portfolio">
                    <TextField
                        type="text"
                        label="Link to Portfolio/Website"
                        placeholder="Link to Portfolio/Website"
                        value={link}
                        style={{ width: '50%' }}
                        onChange={(event) => {
                            setPortfolioLink(event.target.value)
                        }}
                    />
                </div>
                <div className="done">
                    <Link className="button-link" to="/projectspage">
                        <Button
                            type="button"
                            className="done-btn1"
                            size="large"
                            variant="contained"
                        >
                            Done
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile
