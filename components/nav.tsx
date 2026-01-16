'use client'
import Link from "next/link"

const Nav = () => {
    return (
        <div className="w-full border-3 border-zinc-800">
            <span><Link href="/about">About</Link></span>
            <span><Link href="/dashboard">Dashboard</Link></span>
            <span><Link href="/my-projects">My Projects</Link></span>
            <span><Link href="/achivements">Achivements</Link></span>
        </div>
    )
}

export default Nav