import React from "react";

export default function Part7() {
    return(
        <div>
        <section className="flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-white gap-12">
          
          <div className="relative flex-1 max-w-[500px]">
            <div className="absolute inset-0 bg-[#FDF0C2] rounded-2xl -z-10 top-6 left-6 w-full h-full" />
            <img
              src="https://www.hei.school/wp-content/uploads/2024/11/IMG-03-e1720537524581-1024x950-1.webp"
              alt="Étudiants HEI"
              className="relative z-10 w-full object-contain"
            />
          </div>
  
          <div className="flex-1 max-w-xl color_blue">
            <h1 className="text-4xl md:text-5xl font-bold  mb-6">
              Le programme pédagogique
            </h1>
            <p className="text-lg  mb-8">
              Suivant le système LMD, jusqu’au Master, notre formation repose sur
              un programme pédagogique conçu en adéquation avec les attentes du
              marché. La formation est sanctionnée par un diplôme de Licence et
              de Master en Informatique reconnu par le MESupRes de Madagascar.
            </p>
            <button className="border-2 border_blue  font-semibold px-6 py-2 rounded hover:bg-blue-900 hover:text-white transition">
              Notre Programme
            </button>
          </div>
        </section>
      </div>
    );
}