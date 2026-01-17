export default function SkillsIcons({ Icon, Background, SkillName } : { Icon: React.ElementType, Background: string, SkillName: string }){
    return (
        <div className="group pr-2">
            <div className="relative size-22 flex justify-center items-center
            ">
                <span className={`absolute size-2/3 ${Background} rounded-3xl flex justify-center items-center rotate-40 translate-x-1/10 -translate-y-1/10
                    transition-transform
                    duration-200
                    ease-in-out
                    group-hover:translate-x-2/11
                    group-hover:-translate-y-3/11
                `}></span>
                <span className="absolute size-2/3 border border-gray-50 rounded-3xl flex justify-center items-center
                    transition-transform
                    duration-200
                    ease-in-out
                    group-hover:scale-108
                    group-hover:translate-y-2
                ">
                    <Icon className="size-2/3"/>
                </span>
            </div>
            <span className="opacity-0 flex justify-center font-semibold
                transition-all
                duration-200
                ease-in-out
                group-hover:opacity-100
            ">
                {SkillName}
            </span>
        </div>
    )
}