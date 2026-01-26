import ProjectCard from "@/components/projectCard"
import data from '@/data/projects.json'
import React from "react";

export default function MyProjects(){

    const keys = Object.keys(data)

    return(
        <main className="flex-1 flex flex-col p-10">
            <div className="flex justify-center">
                <div className="w-14/15 flex flex-row flex-wrap gap-18">
                    {keys.map((i) => {
                        const project = data[i as keyof typeof data]
                        
                        return (
                        <React.Fragment key={i}>
                            <ProjectCard 
                                url={`/my-projects/${i}`} 
                                img={project.imgUrl[0]}
                                title={project.name}
                                desc={project.description}
                            />
                        </React.Fragment>
                        )
                    })}
                </div>

            </div>
        </main>
    )
}