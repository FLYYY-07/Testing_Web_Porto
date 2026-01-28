import AchivementCard from "@/components/achivementCard"
import achive from "@/data/achivements.json"
import React from "react"

export default function Achivements(){

    const keys = Object.keys(achive)

    return(
        <div className="w-full px-15 py-10">
            <div className="w-full flex flex-col gap-7">
                {
                    keys.map((i) => {
                        const achivements = achive[i as keyof typeof achive]
                        return(
                            <React.Fragment key={i}>
                                <AchivementCard
                                    title={achivements.title}
                                    obtained={achivements.obtained}
                                    imgUrl={achivements.certificateImg}
                                    logoUrl={achivements.organizationLogo}
                                />
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}