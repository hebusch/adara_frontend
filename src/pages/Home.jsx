import {React} from 'react'
import Navbar from '../components/Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">Tarea Development</h1>
                <p className="text-center"> Desarrollado por Heinz Busch </p>
            </div>
        </>
    )

}

export default Home;