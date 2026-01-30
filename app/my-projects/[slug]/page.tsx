import data from '@/data/projects.json'
import Link from 'next/link';
import Image from "next/image";
import { notFound } from 'next/navigation'
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default async function Projects({ params } : { params : Promise<{ slug : string}>}){
    const { slug } = await params

    const project = data[slug as keyof typeof data]

    if (!project) {
        notFound()
    }

    return (
        <div className='w-full flex flex-col py-2 px-15'>
            <div className='w-full py-5 '>
                <div className='group w-fit flex flex-row gap-3 items-center'>
                    <IoArrowBackCircleSharp className='text-2xl'/> 
                    <span className='text-xl
                        transition-transform
                        duration-200
                        ease-linear
                        group-hover:translate-x-2
                    '>Back</span>
                </div>
            </div>
            <div className='border-b-2 border-gray-100'>
                <div className='flex flex-row'>
                    <p className='w-full flex flex-1 font-bold items-center text-4xl'>
                        {project.name}
                    </p>
                    <div className='flex flex-1 justify-end px-10'>
                        <button className='group relative w-fit p-2 flex flex-wrap items-center gap-3 bg-gray-200 text-gray-950 border border-gray-200 rounded-md
                            hover:bg-gray-900
                        '>
                            <Link href={project.siteUrl} className='text-gray-950
                                group-hover:text-gray-200
                            '>
                                Visit Site
                            </Link>
                            <FaExternalLinkAlt className='
                                group-hover:text-gray-200
                            '/>
                        </button>
                    </div>
                </div>
                <p className='w-full my-8 text-md text-justify'>
                    {project.description}
                </p>
                <div className="">
                    
                </div>
            </div>
            {/* nanti coba refactor */}
            <div className='flex flex-col gap-5 py-5 border-b-2 border-gray-200'>
                <span className='font-semibold text-2xl'>Tech Stacks</span>
                <p>lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className='px-15'>
                    <ul className='flex flex-col gap-3'>
                        {project.techStack.map((tech) => (
                            <li key={tech} className='list-disc font-bold'>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <p>lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className='flex flex-col gap-5 py-5 border-b-2 border-gray-200'>
                <span className='font-semibold text-2xl'>Features</span>
                <p>lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                <div className='px-15'>
                    <ul className='flex flex-col gap-3'>
                        {project.features.map((feat) => (
                            <li key={feat} className='list-disc font-bold'>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
                <p>lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            {/* sampe sini */}
            <div className='flex flex-col gap-5 py-5'>
                <span className='font-semibold text-2xl'>Images</span>
                <div>
                    <div className='flex flex-col gap-10'>
                        {project.imgUrl.map((i) => (
                            <div className="h-100 relative"  key={i}>
                                <Image src={i} alt={`gambar-${i}`}
                                    fill
                                    style={{
                                        objectFit: 'contain',
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}