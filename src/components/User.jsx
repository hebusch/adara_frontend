import React from 'react'
import { HiEmojiSad } from 'react-icons/hi'


const User = ({user}) => {

    if(!user.name)
    {
        return(
            <div className="flex flex-col gap-2 text-center mt-4 justify-center items-center" data-testid="invalid-user">
                <HiEmojiSad size={50} className="text-teal-600"/>
                <p> No se encontró el usuario </p>
            </div>
        )
    }



    return (
        <div className="flex flex-col gap-2 text-center mt-4" data-testid="valid-user">
            <p> Nombre: {user.name} </p>
            <p> Apellido: {user.lastName} </p>
            <p> Email: {user.email} </p>
            <p> Fecha de nacimiento: {user.birthday} </p>
            <p> Género: {user.gender}</p>
            <p> Región: {user.region}</p>
            <p> Comuna: {user.comuna}</p>
            <p> Talla: {user.shoe_size} (cm)</p>
        </div>
    )
}

export default User