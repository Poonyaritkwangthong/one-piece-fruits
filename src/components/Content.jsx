"use client"
import React, { useEffect, useState } from 'react'

export default function Content() {
    const [onepieceDate, setOnePieceData] = useState([]);
    console.log(onepieceDate);

    useEffect(() => {
        fetchOnePiece();
    }, []);

    const fetchOnePiece = async () => {
        try {
            const response = await fetch(`https://api.api-onepiece.com/v2/fruits/en`);
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                setOnePieceData(data);
                console.log(data);
            }
        } catch (error) {

        }
    }

    return (
        <div>
            <div>
                <h1 className='text-center mt-6 text-4xl'>Devil fruits</h1>
            </div>
            <div>
                <div className='grid grid-cols-4 gap-6 p-4'>
                    {onepieceDate.map((fruit, index) => (
                        <div key={fruit.id} className='border p-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-6 overflow-hidden'>
                            <div className='h-[15rem]'>
                                <img className='w-full border-2 border-black object-cover h-full' src={fruit.filename} alt="" />
                            </div>
                            <div className='mt-2 text-white overflow-hidden'>
                                <p className='font-bold'>{fruit.name}</p>
                                <p className='text-wrap'>{fruit.description}</p>
                                <p className=''>{fruit.roman_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

