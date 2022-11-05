import {React} from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Registered from '../components/Registered';

const Home = () => {
    const location = useLocation();

    return (
        <div data-testid="home">
            <Navbar />
            {location?.state?.registered && <Registered /> }
            <div className="flex flex-col items-center justify-center mt-4">
                <h1 className="text-3xl font-bold">Tarea Development</h1>
                <p className="text-center"> Desarrollado por Heinz Busch </p>
            </div>
        </div>
    )

}

export default Home;