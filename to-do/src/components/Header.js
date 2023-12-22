import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = (props) => {
    const location = useLocation()
    return(
        <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">{props.title}</h1>
                {location.pathname === '/' && (
                    <Button text={props.showAdd ? 'Close' : 'Add'} color={props.showAdd ? 'btn-red' : 'btn-blue'} onClick={props.toggleForm} />
                )}
        </header>
    )
}
Header.defaultProps = {
    title: 'To Do List'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header