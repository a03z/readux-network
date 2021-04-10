import React, { useEffect } from 'react'

export default function Music() {
    useEffect(() => {
        document.title = `Music`
    }, [])
    return <div>Music</div>
}
