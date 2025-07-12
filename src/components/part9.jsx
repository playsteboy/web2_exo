import React from "react";

export default function Part9(){
    return(
        <div className="flex flex-col items-center h-full w-full gap-10 pb-10 bg-slate-50">
            <section className="color_blue w-1/2 items-center pl-20 pt-20">
                <h1 className="text-4xl pb-4 pl-20">Les technos et languages utilisés</h1>
                <p className="text-lg">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
            </section>
            <section className="w-1/2">
                <div className="flex w-1/2 gap-20 mb-10 pl-40">
                    <img src="https://www.hei.school/wp-content/uploads/2024/06/Java.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/06/python.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/06/JS.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/06/C.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/06/TS.png" alt="" className="w-1/4"/>
                </div>
                <div className="flex w-1/2 gap-20 mb-10 ">
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/docker.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/next.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/aws.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/serverless.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/react.png" alt="" className="w-1/4"/>
                    <img src="https://www.hei.school/wp-content/uploads/2024/09/openapi.png" alt="" className="w-1/4"/>
                </div>
            </section>
        </div>
    )
}