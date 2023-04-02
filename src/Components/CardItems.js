import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { makeStyles } from '@material-ui/core/styles'
import '../Styles/Projectspage.css'

/*passing in properties from Cards*/

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxHeight: 200,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        paddingTop: 0,
    },
}))

function CardItems({ project }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography id="title-project">{project.title}</Typography>
                    {project.isPaid && (
                        <MonetizationOnIcon
                            style={{ color: '#107fb7' }}
                        ></MonetizationOnIcon>
                    )}
                    {project.year && (
                        <KeyboardArrowUpIcon></KeyboardArrowUpIcon>
                    )}
                    <Typography id="desc">{project.description}</Typography>
                </CardContent>
            </div>
            <CardMedia
                className={classes.cover}
                component="img"
                height="200"
                image={`${process.env.PUBLIC_URL}/projectImages/${project.image}`}
                alt={project.title}
            ></CardMedia>
        </Card>
    )
}

export default CardItems
