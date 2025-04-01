import { IWorkShop } from "../../../types/workshop";
import WorkShop from "./WorkShop/WorkShop";

interface MainSectionProps {
    workshops: IWorkShop[];
}

export default function MainSection({ workshops }: MainSectionProps) {
    return(
        <>
            {
                workshops.length === 0
                ?
                <div className="grow flex items-center justify-center">
                    <h1 className="text-5xl text-black/60 font-bold capitalize">No workshops found</h1>    
                </div>
                :    
                <div className="flex flex-col gap-3">
                    {
                        workshops.map(workshop => <WorkShop key={workshop.id} workshop={workshop}/>)
                    }
                </div>
            }
        </>

    )
}