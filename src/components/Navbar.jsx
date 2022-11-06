import {React} from 'react'
import { useNavigate } from 'react-router-dom';
import NavButton from './NavButton';

const Navbar = (props) => {
    const navigate = useNavigate();

    const homeButton = () => {
        navigate('/');
    }

    const registerButton = () => {
        navigate('/register');
    }

    const userButton = () => {
        navigate('/users');
    }

    return (
        <nav className="flex flex-row w-full justify-end h-16 bg-teal-100 px-2 gap-4 items-center">
            <NavButton clickHandle={homeButton} text="Inicio" />
            <NavButton clickHandle={registerButton} text="Crear cuenta" />
            <NavButton clickHandle={userButton} text="Usuarios" />
        </nav>  
    )
}

export default Navbar;      