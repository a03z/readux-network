import React, { useEffect } from 'react'

export default function News() {
    useEffect(() => {
        document.title = `News`
    }, [])
    return <div>News</div>
}
