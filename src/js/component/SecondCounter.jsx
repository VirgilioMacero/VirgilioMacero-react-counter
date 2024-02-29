import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function SecondCounter(props) {

    const { seconds } = props

    const [second, setSecond] = useState(0)

    useEffect(() => {

        const intervalId = setInterval(() => {
            if (second < seconds) {
                setSecond(prevCount => prevCount + 1);
            }
        }, 1000);

        // Limpieza: detener el intervalo cuando el componente se desmonta o actualiza
        return () => clearInterval(intervalId);
    }, [])

    return (
        <div className='row mt-4 gap-4 mx-3 bg-dark py-4 px-5 text-center'>

            <Card content={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            } />
            <Card content={second <= seconds ? Math.floor(second / 100000) % 10 : "T"} />
            <Card content={second <= seconds ? Math.floor(second / 10000) % 10 : "I"} />
            <Card content={second <= seconds ? Math.floor(second / 1000) % 10 : "M"} />
            <Card content={second <= seconds ? Math.floor(second / 100) % 10 : "E"} />
            <Card content={second <= seconds ? Math.floor(second / 10) % 10 : "U"} />
            <Card content={second <= seconds ? Math.floor(second % 10) : "P"} />


        </div>
    )
}
