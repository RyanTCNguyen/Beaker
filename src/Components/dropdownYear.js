import * as React from 'react'
import '../Styles/dropdownYear.css'

class dropdownYear extends React.Component {
    render() {
        return (
            <form>
                {/* onSubmit={this.handleSubmit} in forms tag */}
                <label>
                    <select>
                        <option value="default">Year</option>
                        <option value="freshman">Freshman</option>
                        <option value="sophomore">Sophomore</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                        <option value="graduate">Graduate</option>
                    </select>
                </label>
            </form>
        )
    }
}

export default dropdownYear
