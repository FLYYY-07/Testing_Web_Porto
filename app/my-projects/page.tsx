import ProjectCard from "@/components/projectCard";
import React from "react";

export default function MyProjects(){
    return(
        <main className="flex-1 flex flex-col p-10">
            <div className="flex justify-center">
                <div className="w-14/15 flex flex-row flex-wrap gap-18">
                    {[...Array(5)].map((_, i) => (
                        <React.Fragment key={i}>
                            <ProjectCard url="./my-projects/1"/>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </main>
    )
}