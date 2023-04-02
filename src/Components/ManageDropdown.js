import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@mui/icons-material/Send'
import Tooltip from '@mui/material/Tooltip'
import ConfirmationDialog from './ConfirmationDialog'

export default function ManageDropdown() {
    const [projectTitle, ] = useState('')
    const [open, setOpen] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [acceptConfirmation, setAcceptConfirmation] = useState()
    const [groupMode, ] = useState()
    const [editedGroupMembers, ] = useState([])
    const [editedApplicants, ] = useState([])
    const [editedRejected, ] = useState([])
    const [currentMember, setCurrentMember] = useState(-1)


    const handleClick = () => {
        setOpen(!open)
    }

    const handleClickOpenAccept = (id, e) => {
        setDialogOpen(true)
        setAcceptConfirmation(true)
        e.currentTarget = id
        setCurrentMember(id)
    }

    const handleClickOpenReject = (id, e) => {
        setDialogOpen(true)
        setAcceptConfirmation(false)
        e.currentTarget = id
        setCurrentMember(id)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    const sendEmail = (e, member) => {
        e.preventDefault()
        window.location = `mailto:${member.email}`
    }

    const getUser = (group, id) => {
        return group.filter((user) => user.id === id)[0]
    }


    const getCurrentMembers = () => {
        return editedGroupMembers
    }

    const getCurrentApplicants = () => {
        return editedApplicants
    }

    const getCurrentRejected = () => {
        return editedRejected
    }

    const setUpGroups = () => {
        if (groupMode === 'Applicants') return getCurrentApplicants()
        if (groupMode === 'Past Applicants') return getCurrentRejected()
        return getCurrentMembers()
    }


    const sendIcon = (member) => {
        return (
            <Tooltip title="Contact">
                <IconButton onClick={(e) => sendEmail(e, member)}>
                    <SendIcon color="primary" />
                </IconButton>
            </Tooltip>
        )
    }

    const acceptIcon = (member) => {
        return (
            <Tooltip title="Accept Applicant">
                <IconButton
                    onClick={(e) => handleClickOpenAccept(member.id, e)}
                >
                    <CheckIcon color="success" />
                </IconButton>
            </Tooltip>
        )
    }

    const rejectIcon = (member) => {
        return (
            <Tooltip title="Reject Applicant">
                <IconButton
                    onClick={(e) => handleClickOpenReject(member.id, e)}
                >
                    <CloseIcon color="warning" />
                </IconButton>
            </Tooltip>
        )
    }

    const conditionalIcons = (member) => {
        if (groupMode === 'Past Applicants') {
            return (
                <div>
                    {sendIcon(member)}
                    {acceptIcon(member)}
                </div>
            )
        }
        if (groupMode === 'Applicants') {
            return (
                <div>
                    {sendIcon(member)}
                    {acceptIcon(member)}
                    {rejectIcon(member)}
                </div>
            )
        }
        return (
            <div>
                {sendIcon(member)}
                {rejectIcon(member)}
            </div>
        )
    }

    const handleAccept = async (id) => {
        //TODO
    }

    const handleReject = async (id) => {
        //TODO
    }

    const confirmationComponent = (group) => {
        const m = getUser(group, currentMember)
        if (!acceptConfirmation) {
            return (
                <ConfirmationDialog
                    onClickState={dialogOpen}
                    onClose={handleClose}
                    onAction={handleReject}
                    accept={acceptConfirmation}
                    member={{
                        id: m?.id,
                        first: m?.firstname,
                        last: m?.lastname,
                    }}
                    group={group}
                    project={projectTitle}
                />
            )
        }
        return (
            <ConfirmationDialog
                onClickState={dialogOpen}
                onClose={handleClose}
                onAction={handleAccept}
                accept={acceptConfirmation}
                member={{ id: m?.id, first: m?.firstname, last: m?.lastname }}
                group={group}
                project={projectTitle}
            />
        )
    }

    const memberListItem = (id) => {
        const group = setUpGroups(groupMode)
        const member = getUser(group, id)
        return (
            <div>
                <ListItem alignItems="flex-start">
                    <Tooltip title="Visit profile">
                        <Link to={`/createproject`}>
                            <ListItemAvatar>
                                <Avatar src={member.photo} />
                            </ListItemAvatar>
                        </Link>
                    </Tooltip>
                    <ListItemText
                        primary={`${member.firstname} ${member.lastname}`}
                        secondary={`Pronouns ${member.pronouns}`}
                        style={{ marginTop: '30' }}
                    />
                    {conditionalIcons(member)}
                </ListItem>
            </div>
        )
    }

    const memberList = () => {
        const group = setUpGroups(groupMode)
        return (
            <div>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List
                        dense
                        sx={{
                            width: '100%',
                            maxWidth: 400,
                            bgcolor: 'background.paper',
                        }}
                    >
                        {group.map((value) => {
                            return (
                                <div key={value.id}>
                                    {memberListItem(value.id)}
                                </div>
                            )
                        })}
                    </List>
                </Collapse>
                {confirmationComponent(group)}
            </div>
        )
    }

    return (
        <div
            style={{
                paddingLeft: 100,
            }}
            className="memberslist"
        >
            <List
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary={`Manage ${groupMode}`} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {memberList()}
            </List>
        </div>
    )
}
