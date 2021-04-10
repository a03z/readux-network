import React, { useEffect } from 'react'
import preloader from '../../entities/assets/loading.svg'
import s from '../../app/styles/preloader.module.css'

export default function Preloader(props) {
    useEffect(() => {
        document.title = 'Loading...'
    }, [])
    return <img src={preloader} alt="loading gif" className={s.preloader} />
}
