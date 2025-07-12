import React from "react";
export default function Part10(){
    return(
        <div className="flex flex-col items-center h-full w-full gap-10 pb-10">
        <section className="color_blue w-1/2 items-center pl-20 pt-20">
            <h1 className="text-4xl pb-4 pl-40">Nos partenaires</h1>
            <p className="text-lg pr-20">L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
        </section>
        <section className="w-1/2">
            <div className="flex w-1/2 gap-20 mb-10 ">
                <img src="https://www.hei.school/wp-content/uploads/2024/05/LOGO-NEXTA.webp" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/PN_Logo_baseline_color_ENG.png" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/Yooz-2023-Logo-2.webp" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/logo-etech.png" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/09/logo_emit.png" alt="" className="w-1/4"/>
            </div>
            <div className="flex w-1/2 gap-20 mb-10 ">
                <img src="https://www.hei.school/wp-content/uploads/2024/06/Logo-Numer-vf.png" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/bp-logo-full-1536x497.webp" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/YIF_LOGO_512x512_BL_on_WH-1.webp" alt="" className="w-1/4"/>
                <img src="https://www.hei.school/wp-content/uploads/2024/05/logo-kante-company-1.png" alt="" className="w-1/4"/>
            </div>
        </section>
    </div>
    )
}