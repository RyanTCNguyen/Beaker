import { TextField } from "@material-ui/core"
import { useState } from "react"
import { postFunction } from "../EngineFunctions/ProjectsFetch"

export default function ProjectApplication({id, email}) {
    const defaultApplication = {reason: "", projcet_id: id, email: email, accepted: false}
    const [application, setApplication] = useState(defaultApplication) 
    const onSubmit=()=>{postFunction('applications-engine', application)}
    return(
        <div style={{
            position:"absolute",
            display: "inlineBlock",
            cursor: "pointer",
            top: "25vh",
            left: "10vw",
        }}>
            <div style={{backgroundColor:"rgba(200,200,200,.8)", zIndex: 11, width: "80vw", height: "50vh", padding: "20px"}}>
                <TextField  style={{height:"6em !important"}}multiline={true} size='medium' placeholder="Reason you are a good fit" value={application.reason} onChange={e=>setApplication({...application, reason: e.target.value})}/>
                <button onClick={onSubmit}>post</button>
            </div>
        </div>
    )
}