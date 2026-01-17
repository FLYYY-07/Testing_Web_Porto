'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Tabs({ref, label}: {ref: string, label: string}){
    const pathname = usePathname()
    const isActive = pathname === ref

    return (
        <span className="flex-1">
            <div className={`
                w-inherit h-inherit p-2 rounded-2xl
                ${isActive ? "bg-gray-900" : `
                    hover:text-gray-950
                    hover:bg-gray-100
                `}
            `}>
                <Link href={ref} className="flex justify-center font-bold text-xs">{label}</Link>
            </div>
        </span>
    )
}
