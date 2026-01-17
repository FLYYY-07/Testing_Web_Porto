import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import SkillsIcons from "./skills-icons";

export default function Skills(){

    return (
        <div className="border-t-2 p-7">
            <div className="flex flex-col">
                <span className="text-3xl font-bold">
                    My Skills
                </span>
                <span className="italic">
                    Proficiency that i have built throughout my life
                </span>
            </div>
            <div className="flex flex-row pt-10">
                <SkillsIcons Icon={FaHtml5} Background="bg-[#f97316]" SkillName="HTML"/>
                <SkillsIcons Icon={RiTailwindCssFill} Background="bg-[#00bcff]" SkillName="CSS"/>
            </div>
        </div>
    )
} 