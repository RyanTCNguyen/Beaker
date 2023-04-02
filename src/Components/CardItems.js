import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { makeStyles } from '@material-ui/core/styles'
import '../Styles/Projectspage.css'
import defaultLogo from '../Images/blackLinedBeakerBgRemoved.png'
/*passing in properties from Cards*/

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        maxHeight: '200',
        height: '10vw',
        width: '20vw'
    },
    details: {
        position: 'relative',
        left: 0,
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: '10vw !important',
        position: 'sticky',
        left: 0,
        height:'10vw',
    },
}))

function CardItems({ project }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                component="img"
                image={project?.image?project.image:defaultLogo}
                alt={project.title}
            ></CardMedia>
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
            
        </Card>
    )
}
//image={`${process.env.PUBLIC_URL}/projectImages/${project.image}`}

export default CardItems
