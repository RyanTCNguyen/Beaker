import { Button } from "@material-ui/core"

/**
 * sidebaritems are a list of objects that contain a string link, string value, and integer key
 * @param {*} sidebaritems
 * @returns a sidebar
 */
export default function Side({ children, sidebaritems, setPage=()=>{}, page }) {
    return (
        <>
        <ul className="sidebar">
            {sidebaritems.map((e) => {
                return (
                    <li className="side-text-title" key={e.key}>
                        <Button style={{backgroundColor: page === e.page? '#BBBBBB' : ""}} key={e.key} onClick={()=>{setPage(e.page)}}>
                            {e.value}
                        </Button>
                    </li>
                )
            })}
        </ul>
        <div className="side-children">{children}</div>
        </>
    )
}
