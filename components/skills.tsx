import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import SkillsIcons from "./skills-icons";

export default function Skills(){
    const aquiredSkills = [
        { Icon: IoLogoHtml5, Background: "bg-[#f97316]", Label: "HTML", Color: "#d1d5db" },
        { Icon: IoLogoCss3, Background: "bg-[#33a3d5]", Label: "CSS", Color: "#d1d5db" },
        { Icon: IoLogoJavascript, Background: "bg-[#f4cc27]", Label: "Javascript", Color: "#d1d5db" },
        { Icon: SiTypescript, Background: "bg-[#3c8dcd]", Label: "Typescript", Color: "#d1d5db" },
        { Icon: SiTailwindcss, Background: "bg-[#00bcff]", Label: "Tailwind", Color: "#d1d5db" },
        { Icon: SiNextdotjs, Background: "bg-[#d1d5db]", Label: "Next.Js", Color: "black" },
    ]

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
            <div className="flex flex-row flex-wrap pt-10">
                {aquiredSkills.map((skill, index) => {
                    return (
                        <SkillsIcons 
                            key={index} 
                            Icon={skill.Icon} 
                            Background={skill.Background} 
                            SkillName={skill.Label} 
                            Fore={skill.Color}
                        />
                    )
                })}
            </div>
        </div>
    )
} 