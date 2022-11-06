import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message'
import { isValidEmail, isValidName, isValidPassword } from '../utils/users';

import Navbar from '../components/Navbar';

const Register = () => {
    const { register, handleSubmit, formState: {errors}, watch } = useForm();
    const [registerError, setRegisterError] = useState('');
    const {REACT_APP_API_URL} = process.env;
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const response = await fetch(`${REACT_APP_API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(data)
        });

        const result = await response.json();

        if (response.ok) {
            navigate('/', {state: {registered: true}});
        } else if (response.status === 500) {
            setRegisterError('Error interno del servidor');
        } else {
            setRegisterError(result.message);
        }
    }

    const passwordMatch = (pwd) => {
        return pwd === watch('password');
    }

    return (
        <div data-testid="register">
        <Navbar />
        <div className="flex flex-col justify-center items-center w-full my-8">
            <div className="shadow-sm shadow-black p-5 max-sm:w-[90%] w-1/2 h-auto flex flex-col items-center justify-center gap-5 bg-white rounded-md">
            <h1 className="text-3xl font-bold text-center">Crear una cuenta</h1>
                <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex flex-col justify-center gap-4 w-full">
                            <div className="flex flex-row gap-4 w-full max-sm:flex-wrap">
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Nombre</label>
                                    <input placeholder="Nombre" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.name && 'border-red-500'}`}
                                        {...register("name", 
                                        {
                                            required: "Campo requerido",
                                            validate: (value) => isValidName(value) || "El nombre no es válido"
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="name" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Apellido</label>
                                    <input placeholder="Apellido" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.lastName && 'border-red-500'}`}
                                        {...register("lastName", 
                                        {
                                            required: "Campo requerido",
                                            validate: (value) => isValidName(value) || "El apellido no es válido"
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="lastName" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 w-full max-sm:flex-wrap">
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Correo</label>
                                    <input placeholder="Correo" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.email && 'border-red-500'}`}
                                        {...register("email", 
                                        {
                                            required: "Campo requerido",
                                            validate: (value) => isValidEmail(value) || "El correo no es válido"
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="email" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Fecha de Nacimiento</label>
                                    <input type="date" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.birthday && 'border-red-500'}`}
                                        {...register("birthday", 
                                        {
                                            required: "Campo requerido"                                        
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="birthday" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 w-full max-sm:flex-wrap">
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Género</label>
                                    <select className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.gender && 'border-red-500'}`}
                                        {...register("gender", 
                                        {
                                            required: "Campo requerido"
                                        })}
                                    >   
                                        <option></option>
                                        <option value="male">Hombre</option>
                                        <option value="female">Mujer</option>
                                        <option value="other">Otro</option>
                                    </select>    
                                    <ErrorMessage errors={errors} name="gender" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Talla Zapatos (cm)</label>
                                    <input placeholder="Talla Zapatos" type="number" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.shoe_size && 'border-red-500'}`}
                                        {...register("shoe_size", 
                                        {
                                            required: "Campo requerido",
                                            min: {
                                                value: 10,
                                                message: "Talla invalida"
                                            },
                                            max: {
                                                value: 50,
                                                message: "Talla invalida"
                                            }
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="shoe_size" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 w-full max-sm:flex-wrap">
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Región</label>
                                    <input placeholder="Región" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.region && 'border-red-500'}`}
                                        {...register("region", 
                                        {
                                            required: "Campo requerido",
                                            minLength: {
                                                value: 3,
                                                message: "Región invalida"
                                            }
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="region" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                                <div className='w-full'>
                                    <label className="text-sm text-gray-600">Comuna</label>
                                    <input placeholder="Comuna" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.comuna && 'border-red-500'}`}
                                        {...register("comuna", 
                                        {
                                            required: "Campo requerido",
                                            minLength: {
                                                value: 3,
                                                message: "Región invalida"
                                            }
                                        })} 
                                    />
                                    <ErrorMessage errors={errors} name="comuna" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row max-sm:flex-wrap w-full gap-4">
                            <div className='w-full'>
                                <label className="text-sm text-gray-600">Contraseña</label>
                                <input placeholder="Contraseña" type="password" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.password && 'border-red-500'}`}
                                        {...register("password", 
                                        {
                                            required: "Campo requerido",
                                            validate: (value) => isValidPassword(value) || "Contraseña debe tener al menos 8 caracteres"
                                        })} 
                                />
                                <ErrorMessage errors={errors} name="password" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                            </div>
                            <div className='w-full'>
                                <label className="text-sm text-gray-600">Confirmar contraseña</label>
                                <input placeholder="Confirmar contraseña" type="password" className={`border-2 outline-0 border-gray-300 rounded-md pl-2 w-full h-[45px] ${errors?.password && 'border-red-500'}`}
                                        {...register("passwordConfirm", 
                                        {
                                            required: "Campo requerido",
                                            validate: (value) => passwordMatch(value) || "Contraseña no coincide"
                                        })}
                                />
                                <ErrorMessage errors={errors} name="passwordConfirm" render={({ message }) => <p className="text-red-500 text-sm">{message}</p>} />
                            </div>
                        </div>
                        <button type="submit" className="bg-teal-600 hover:bg-teal-700 transition-all text-white font-bold py-2 px-4 rounded h-12"> Crear Cuenta </button>
                    </div>
                </form>
                {registerError && <p className="text-red-500 text-sm">{registerError}</p>}
            </div>
        </div>
        </div>
    )
}

export default Register