import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'


const Card = ({ title, info }) => {
    const [show, setShow] = useState(false)
    return (
        <article className='w-full rounded-lg px-4 border shadow-xl border-gray-400'>
            <div className="flex justify-between items-center py-4">
                <h2 className="text-base md:text-2xl font-semibold text-black/80">{title}</h2>
                <span onClick={() => setShow(!show)} className="bg-slate-500 p-2 md:p-4 rounded-full">{show ? <FaMinus className='text-pink-700' />:<FaPlus className='text-pink-700' />}</span>
            </div>

            {show && <p className="text-base  my-4 font-light text-gray-500">{info}</p>}

        </article>
    )
}

export default Card;