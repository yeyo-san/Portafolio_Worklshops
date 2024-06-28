'use client'

import { TypeAnimation } from "react-type-animation";

const HeaderComponent = () =>{
    return(
        <div className="grid grid-rows-2">
            <div className="flex justify-center mt-5">
                <h1 className="font-bold text-primary text-6xl">
                    Alejo-
                    <span className="text-tercery">
                        Develop
                    </span>
                </h1>
            </div>
            <div className="text-center mt-5 text-slate-200">
                <p>
                    <TypeAnimation
                    sequence={[
                        'Portafolio hecho exclusivamente para la entrega de trabajos semana 3',
                        1000,
                        'Portafolio hecho con Next.js y Tailwind CSS',
                        1000,
                        'Perfil unicamente hecho para trabajos en Riwi',
                        1000,
                        'Hola profe',
                        1000
                    ]}
                    wrapper="span" 
                    speed={60}
                    repeat={Infinity}
                    
                    className="font-bold text-tercery"/>
                </p>
            </div>
        </div>
    )
}

export default HeaderComponent;