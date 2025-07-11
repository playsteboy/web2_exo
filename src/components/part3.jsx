import React from 'react';

export default function Part3() {
    return (
        <div className='w-full flex flex-col justify-evenly h-screen bgc_blue_sky items-center'>
            <section className='text-white text-center w-4/6 flex flex-col justify-between gap-5 text-lg'>
                <h1 className='text-5xl font-semibold'>L'equipe pedagogique</h1>
                <p>
                    Notre équipe pédagogique se compose d’experts nationaux et
                    internationaux de l’informatique, de la cybersécurité, de l’intelligence
                    artificielle, dont un ingénieur chez Google. Ils sont passionnés par
                    l’informatique et sont engagés vers l’excellence. Nous sommes conscients
                    que cette équipe est la pierre angulaire de l’employabilité de nos
                    étudiants, elle a été soigneusement sélectionnée.
                </p>
            </section>
            <section className='relative flex flex-col items-center justify-center w-full h-2/3 color_blue'>
                <button className='text-3xl text-white w-14 h-14 absolute left-36 hover:opacity-80'>
                    <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className='text-3xl text-white w-14 h-14 absolute right-36 hover:opacity-80'>
                    <i className="fa-solid fa-angle-right"></i>
                </button>


                <div className='slide2_container h-full flex flex-row overflow-hidden items-center justify-between gap-7'> 
                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2025/05/Mirado-150x150.webp"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Mirado RAFENOMAHENINTSOA</h3>
                    </div>
                        <p className='mt-2'>Data and Business Intelligence Specialist 5+</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2025/05/Julien-150x150.webp"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Julien RAJERISON</h3>
                    </div>
                        <p className='mt-2'>Lead Développeur | Fondateur de l’association Techzara Madagascar</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2025/03/ryan-min-150x150.webp"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Ryan ANDIAMAHERY</h3>
                    </div>
                        <p className='mt-2'>Developpeur back-end | confondateur et directeur des operations de HEI</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2022/01/Jean-Aime-Maxa-modified-150x150.jpg"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Jean Aime Maxa</h3>
                    </div>
                        <p className='mt-2'>Responsable technique cybersecurte ches CES France Continental (Toulose-France)</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2022/01/Parison-e1716502987165-150x150.png"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Parison Ravalomanda</h3>
                    </div>
                        <p className='mt-2'>Ingeieur en informatique | ingenieur logiciel chez google (Londre-UK)</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2022/01/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Yanick Raharijaona</h3>
                    </div>
                        <p className='mt-2'>Responsable technique ML chez Rocket Science (Ottawa-Canada)</p>
                    </div>


                    <div className='slide2_content rounded-2xl '>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2022/01/Tahina-OK-e1716502943928-150x150.png"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>DR Tahina Ralitera</h3>
                    </div>
                        <p className='mt-2'>Docteure-ingenieure , CNRS France | Prix l'Oreal-UNESCO pour les femmes en science (2017)</p>
                    </div>


                    <div className='slide2_content rounded-2xl'>
                    <div className='slide2_profile'>
                        <img src="https://hei.school/wp-content/uploads/2022/01/97-portraits-97_edited-e1716502895676-150x150.jpg"className='slide2_img'alt=""/>
                    </div>
                    <div className='text-2xl font-semibold ml-5 mr-5'>
                        <h3>Dr Lou Maurica</h3>
                    </div>
                        <p className='mt-2'>Docteur-ingenieur en informatique | fondateur directeur pedagogique de HEI</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between gap-2'>
                    <button className='w-2 h-2 rounded-full bg-white button1'></button>
                    <button className='w-2 h-2 rounded-full bg-white button2'></button>
                    <button className='w-2 h-2 rounded-full bg-white button3'></button>
                    <button className='w-2 h-2 rounded-full bg-white button4'></button>
                    <button className='w-2 h-2 rounded-full bg-white button5'></button>
                    <button className='w-2 h-2 rounded-full bg-white button6'></button>
                    <button className='w-2 h-2 rounded-full bg-white button7'></button>
                    <button className='w-2 h-2 rounded-full bg-white button3'></button>
                </div>
            </section>
        </div>
    );
}