import React from 'react';
export default function Part2(){
    return <div className='flex flex-row justify-between w-full h-screen pt-20 pr-48'>
        <section className='w-1/2 flex justify-center items-center ml-24'>
            <img src="https://hei.school/wp-content/uploads/2024/11/A-propos-left-1.webp" alt="" className='w-3/4'/>
        </section>
        <section className='w-1/2 h-full pr-14 flex flex-col justify-between gap-3 '>
            <h1 className='text-5xl'>A propos de nous</h1>
            <div>
                <h2 className='text-2xl font-bold'><i class="fa-solid fa-graduation-cap"></i>+3ans</h2>
                <p>
                    Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.
                </p>
            </div>
            <div>
                <h2><i class="fa-solid fa-users"></i>+250 etudiants</h2>
                <p>
                    Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.
                </p>
            </div>
            <div>
                <h2><i class="fa-solid fa-medal"></i>Notre mission</h2>
                <p>
                    Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.
                </p>
            </div>
        </section>
    </div>
}