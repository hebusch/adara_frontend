import {React, useState} from 'react'
import Navbar from '../components/Navbar';
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'

import User from '../components/User';
import { isValidEmail } from '../utils/users';

const Users = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const {REACT_APP_API_URL} = process.env;
    const [user, setUser] = useState(null);
    const [sent, setSent] = useState(false);

    const onSubmit = async (data) => {
        const response = await fetch(`${REACT_APP_API_URL}/user/${data.email}`, {
            method: 'GET'
        });

        const result = await response.json();

        setUser(result.data);
        setSent(true);
    }

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center w-full my-8">
                <div className="shadow-sm shadow-black p-5 max-sm:w-[90%] w-1/3 h-auto flex flex-col items-center justify-center gap-5 bg-white rounded-md">
                    <h1 className="text-2xl font-bold">Buscar Usuario</h1>
                    <form onSubmit={handleSubmit(data => onSubmit(data))} className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col">                        
                            <label className="text-sm text-gray-600">Correo</label>
                            <input type="text" placeholder="Correo" className={`border-2 outline-0 border-gray-300 rounded-md p-2 ${errors.email && 'border-red-500'}`}
                                {...register("email", {
                                    required: "Campo requerido",
                                    validate: (value) => isValidEmail(value) || "El correo no es válido"
                                })}
                            />
                            <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                        </div>
                        <button type="submit" className="bg-teal-600 hover:bg-teal-700 transition-all text-white font-bold py-2 px-4 rounded h-12"> Buscar Usuario </button>
                    </form>
                </div>
                <div className="mt-4 w-[90%]">
                    {sent && <User user={user} />}
                </div>
            </div>
        </>
    )
}

export default Users