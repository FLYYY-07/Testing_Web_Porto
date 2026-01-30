import Image from "next/image"

export default function AchivementCard(
    {
        title,
        obtained,
        imgUrl,
        logoUrl,
    } :
    {
        title: string,
        obtained: string,
        imgUrl: string,
        logoUrl: string
    }
){
    return(
        <div className="group flex flex-row border-[0.5px] border-gray-950 bg-gray-950
            transition-transform
            duration-500
            ease-in-out
            hover:scale-105
        ">
            <div className="relative w-1/4 h-27 ">
                <Image src={imgUrl} alt={`test`}
                    fill
                    style={{
                        objectFit:'cover'
                    }}
                />
                <div className="absolute inset-0 bg-radial from-transparent via-gray-300/1 to-gray-950
                    transition-colors
                    duration-300
                    ease-linear
                    group-hover:bg-gray-950
                    group-hover:opacity-85
                ">
                    <span className="size-full flex items-center justify-center text-gray-300 opacity-0
                        transition-all
                        duration-400
                        ease-linear
                        group-hover:opacity-100
                    ">
                        View Detail
                    </span>
                </div>
            </div>
            <div className="w-full h-inherit flex flex-row">
                <div className="flex-1 flex flex-col px-8 py-5 justify-center">
                    <span className="text-gray-200 font-semibold text-xl">{title}</span>
                    <span className="text-gray-500">Obtained {obtained}</span>
                </div>
                <div className="relative w-1/5 flex items-center justify-center">
                <Image src={logoUrl} alt={`test`}
                    width={50}
                    height={50}
                    style={{
                        objectFit:'cover'
                    }}
                />
                </div>
            </div>
        </div>
    )
}