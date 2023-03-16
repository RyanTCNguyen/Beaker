import { useState } from "react"
import { postFunction } from "../EngineFunctions/ProjectsFetch"

export default function ProjectApplication({id, username}) {
    const defaultApplication = {reason: "reason here", id: id, name: username}
    const [application, setApplication] = useState(defaultApplication) 
    const onSubmit=()=>{postFunction('apps-engine', application)}
    return(
        <div style={{position:"absolute"}}>
            <textarea value={application.reason} onChange={e=>setApplication({...application, reason: e.target.value})}/>
            <button onClick={onSubmit}>post</button>
        </div>
    )
}