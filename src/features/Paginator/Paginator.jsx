import React, { useEffect, useState } from 'react'
import {
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronRightIcon,
} from '@heroicons/react/solid'
import s from '../../app/styles/paginator.module.css'

export default function Paginator({
    onPageChange,
    totalUsersCount,
    pageSize,
    currentPage,
    isFetching,
}) {
    const [itemsPerPortion] = useState(5)
    let [currentPortion, setPortion] = useState(1)

    const pagesCount = Math.ceil(totalUsersCount / pageSize)
    const portionCount = Math.ceil(pagesCount / itemsPerPortion)
    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const indexOfLastPost = currentPortion * itemsPerPortion
    const indexOfFirstPost = indexOfLastPost - itemsPerPortion
    const currentPages = pages.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
        setPortion(1)
    }, [])
    useEffect(() => {
        document.title = `Current page: ${currentPage}`
    }, [currentPage])

    return (
        <div className={s.paginationContainer}>
            <div className={s.prevPages}>
                <button
                    className={s.changePortion}
                    disabled={isFetching || currentPortion <= 1}
                    onClick={() => {
                        onPageChange(1)
                        setPortion(1)
                    }}
                >
                    <ChevronDoubleLeftIcon />
                </button>
                <button
                    className={s.changePortion}
                    disabled={isFetching || currentPortion <= 1}
                    onClick={() => {
                        setPortion(--currentPortion)
                    }}
                >
                    <ChevronLeftIcon />
                </button>
            </div>

            <div className={s.pageButtons}>
                {currentPages.map((p) => {
                    return (
                        <button
                            onClick={() => {
                                onPageChange(p, currentPage)
                            }}
                            className={`${s.pageSpan} ${
                                currentPage === p ? s.activePage : undefined
                            }`}
                            key={p}
                            disabled={isFetching}
                        >
                            {p}
                        </button>
                    )
                })}
            </div>
            <div className={s.nextPages}>
                <button
                    className={s.changePortion}
                    disabled={isFetching || currentPortion >= portionCount}
                    onClick={() => {
                        setPortion(++currentPortion)
                    }}
                >
                    <ChevronRightIcon />
                </button>
                <button
                    className={s.changePortion}
                    disabled={isFetching || currentPortion >= portionCount}
                    onClick={() => {
                        onPageChange(pages.length)
                        setPortion(portionCount)
                    }}
                >
                    <ChevronDoubleRightIcon />
                </button>
            </div>
        </div>
    )
}
