import React from "react"

export default function Part8() {
    return(
        <div className="px-12 py-16 flex flex-col items-center bg-white">
      
        <section className="flex flex-wrap justify-center gap-6 mb-16">
  
          <div className="bg-[#f7eed1] rounded-2xl p-6 w-[280px] h-[180px] flex flex-col justify-center shadow-md ">
            <h1 className="text-5xl font-bold color_yellow mb-2">25%</h1>
            <p className="text-2xl font-semibold color_blue leading-snug ">
              Apprentissage théoriques en présentiel
            </p>
          </div>
  
          <div className="bg-[#f7eed1] rounded-2xl p-6 w-[280px] h-[180px] flex flex-col justify-center shadow-md">
            <h1 className="text-5xl font-bold color_yellow mb-2">25%</h1>
            <p className="text-2xl font-semibold color_blue leading-snug">
              Apprentissage sur supports numériques
            </p>
          </div>
  
          <div className="bg-[#f7eed1] rounded-2xl p-6 w-[280px] h-[180px] flex flex-col justify-center shadow-md">
            <h1 className="text-5xl font-bold color_yellow mb-2">25%</h1>
            <p className="text-2xl font-semibold color_blue leading-snug">
              Travaux individuels de l’étudiant
            </p>
          </div>
  
          <div className="bg-[#f7eed1] rounded-2xl p-6 w-[280px] h-[180px] flex flex-col justify-center shadow-md">
            <h1 className="text-5xl font-bold color_yellow mb-2">25%</h1>
            <p className="text-2xl font-semibold color_blue leading-snug">
              Apprentissage en entreprise
            </p>
          </div>
  
        </section>
  
        <section className="flex flex-wrap justify-center gap-8 w-full max-w-7xl">
          <img
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-1.webp"
            alt=""
            className="rounded-2xl w-[380px] h-[400px] object-cover"
          />
          <img
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-2.webp"
            alt=""
            className="rounded-2xl w-[380px] h-[400px] object-cover"
          />
          <img
            src="https://www.hei.school/wp-content/uploads/2025/05/Mask-group-3.webp"
            alt=""
            className="rounded-2xl w-[380px] h-[400px] object-cover"
          />
        </section>
      </div>
    )
};