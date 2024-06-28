import dataPortafolio from "@/utils/data";
import { Transition_fadeIn } from "./transition.fadeIn";
import Image from "next/image";
import Link from "next/link";

const PortafolioComponent = () =>{
    return(
        <Transition_fadeIn position="bottom" className="flex justify-center w-full p-4 rounded-xl  border border-teal-50">
            <div className="relative w-auto  grid grid-cols-2 p-4  border border-teal-50 rounded-xl">
                {dataPortafolio.map((data) => (
                    <div key={data.id} className="flex flex-col items-center gap-6 mr-5 p-6 rounded-xl bg-black hover:bg-black/80">
                        <h2 className="font-bold text-4xl text-tercery">
                            {data.title} {' '}
                            <span className="font-bold text-primary">
                                {data.workshop}
                            </span>
                        </h2>

                        <Image src={data.image} width={450} height={450} alt='Portafolio Preview' className="rounded-lg" />

                        <p className="text-xl text-tercery mx-20 m-2">
                            {data.description}
                        </p>
                        
                       <div className="flex space-x-10">

                            <Link href={data.urlRepository} target="_blank" className="p-2 text-tercery transition duration-150 rounded-lg bg-primary hover:bg-primary/60">
                                Ir al repositorio en Git-hub
                            </ Link>

                            <Link href={data.urlDemo} target="_blank" className="p-2 text-tercery transition duration-150 rounded-lg bg-primary hover:bg-primary/60">
                                Ir al demo
                            </ Link>

                       </div>
                    </div>
                ))}
            </div>
        </Transition_fadeIn>
    )
}

export default PortafolioComponent;