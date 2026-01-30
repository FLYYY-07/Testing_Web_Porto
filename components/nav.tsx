'use client'

import Tabs from "./nav-tabs";

export default function Nav(){
    return (
        <div className="px-20">
            <div className="w-full border-4 p-[1.5px] flex flex-row bg-gray-700 rounded-3xl border-gray-700 ">
                <Tabs ref={`/`} label="Intro"/>
                <Tabs ref={`/dashboard`} label="Dashboard"/>
                <Tabs ref={`/my-projects`} label="My Projects"/>
                <Tabs ref={`/achivements`} label="Achivements"/>
            </div>
        </div>

    )
}

