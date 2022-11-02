import {React} from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const navigate = useNavigate();

    const registerButton = () => {
        console.log('Register');
    }

    const userButton = () => {
        console.log('Get User');
    }

    return (
        <nav className="flex flex-row w-full justify-end h-16 bg-teal-50 px-2 gap-4 items-center">
            <button onClick={registerButton} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded h-12">
                Register
            </button>
            <button onClick={userButton} className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded h-12">
                Get User
            </button>
        </nav>  
    )
}

export default Navbar;      