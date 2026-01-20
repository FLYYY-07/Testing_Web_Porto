import ProjectCard from "@/components/projectCard";
import React from "react";

export default function MyProjects(){
    return(
        <main className="flex-1 flex flex-col p-10">
            <div className="flex-1 flex flex-row flex-wrap gap-x-10 gap-y-10 justify-center scroll-auto">
                {[...Array(5)].map((_, i) => (
                    <React.Fragment key={i}>
                        <ProjectCard />
                        <ProjectCard />
                    </React.Fragment>
                ))}
            </div>
        </main>
    )
}