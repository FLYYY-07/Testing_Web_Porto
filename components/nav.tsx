'use client'

import Tabs from "./nav-tabs";

export default function Nav(){
    return (
        <div className="px-20">
            <div className="w-full border-3 p-[1.5px] flex flex-row bg-zinc-800 rounded-3xl border-zinc-800 ">
                <Tabs ref="/" label="Intro"/>
                <Tabs ref="/dashboard" label="Dashboard"/>
                <Tabs ref="/my-projects" label="My Projects"/>
                <Tabs ref="/achivements" label="Achivements"/>
            </div>
        </div>

    )
}

