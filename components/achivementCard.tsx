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
        <div className="flex flex-row border-[0.5px] border-gray-950 bg-gray-950">
            <div className="relative w-1/4 h-27 ">
                <Image src={imgUrl} alt={`test`}
                    fill
                    style={{
                        objectFit:'cover'
                    }}
                />
                <div className="absolute inset-0 bg-radial from-transparent via-gray-300/5 to-gray-950
                    transition-colors
                    duration-300
                    ease-in-out
                    group-hover:via-gray-900/90
                "></div>
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