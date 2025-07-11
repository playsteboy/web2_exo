import React from 'react';
export default function Navbar(){
    return <nav className="flex flex-row w-full text-white bgc_blue justify-between pt-3 pb-3 pl-20 gap-12 navbar">
        <a href="">
        <img src="https://hei.school/wp-content/uploads/2022/09/cropped-Logo-e1662790239183.png" alt=""
        className='w-40 h-20 pl-10' />
        </a>
  <ul className="flex flex-row w-full justify-center gap-9 font-semibold text-lg ml-20 pl-12 items-center">
    <li><a href="">ACCUEIL</a></li>
    <li><a href="">ACTUALITES</a></li>
    <li><a href="">BOURSE D'ETUDES</a></li>
    <li><a href="">INSCRIPTION</a></li>
    <li><button className='flex bgc_yellow rounded-sm w-30 h-10 p-4 text-center justify-center items-center hover:text-black'>INTRANET</button></li>
  </ul>
</nav>

}