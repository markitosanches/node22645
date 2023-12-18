import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    const showConsole = () => {
        console.log('Click compoment')
    }
    return(
        <header className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">{props.title}</h1>
                <Button text="Ajouter" onClick={showConsole} />
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