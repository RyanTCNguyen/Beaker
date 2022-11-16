/**
 * sidebaritems are a list of objects that contain a string link, string value, and inetger key
 * @param {*} sidebaritems
 * @returns a sidebar
 */
export default function Side({ sidebaritems }) {
    return (
        <ul className="sidebar">
            {sidebaritems.map((e) => {
                return (
                    <li className="side-text-title" key={e.key}>
                        <a key={e.key} href={e.link}>
                            {e.value}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}
