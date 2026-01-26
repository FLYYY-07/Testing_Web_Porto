'use client'
import Image from "next/image";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

export default function ProjectCard(
{ 
    url, 
    img,
    title,
    desc 
} : { 
    url : string,
    img : string,
    title : string,
    desc : string
})
{
    return(
        <Link href={url}
            className="group w-90 h-90 flex flex-col  rounded-4xl relative overflow-hidden">
            <div className="w-full h-4/7 relative">
                <Image src={img} alt="vic3"
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-500/40 to-transparent
                    transition-colors
                    duration-300
                    ease-in-out
                    group-hover:via-gray-900/90
                ">
                    <span className="w-full h-full flex justify-center items-center opacity-0
                        transition-all
                        duration-300
                        ease-in-out
                        group-hover:opacity-100
                    ">
                        View Details 
                        <GoArrowRight className="ml-5
                            transition-all
                            duration-500
                            ease-linear
                            group-hover:-translate-x-3
                        "/>
                    </span>
                </div>
            </div>
            <div className="w-full flex-1 flex bg-gray-950">
                <div className="px-7 py-3 flex-1 flex flex-col
                    transition-all
                    duration-300
                    ease-in-out
                    group-hover:pt-0
                ">
                    <span className="w-full font-bold text-lg">{title}</span>
                    <p className="my-2 text-sm text-left text-wrap line-clamp-3 ">
                        {desc}     
                    </p>
                </div>
            </div>
        </Link>
    )
}