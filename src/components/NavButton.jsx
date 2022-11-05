import React from 'react'

const NavButton = ({clickHandle, text}) => {
    return (
        <button onClick={clickHandle} className="bg-teal-600 hover:bg-teal-700 transition-all text-white font-bold py-2 px-4 rounded h-12">
            {text}
        </button>
    )
}

export default NavButton;