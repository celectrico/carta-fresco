import React from "react";
import { IoPintSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { Link } from "react-scroll";

const NavBar = () => {  
    return (

        <div className="w-full p-2 h-10 sticky bottom-0 left-0 right-0 bg-white z-40" id='nav-bar'>
            <div className="flex flex-row justify-evenly">
            <Link smooth={true} to="Nuestras Cervezas - Our Beers" offset={-70}>
                <NavBarIcon icon={ <IoPintSharp size='28' />} />
            </Link>
            <Link smooth={true} to="Bebidas - Drinks" offset={-70}>
                <NavBarIcon icon={ <BiDrink size='28' />} />
            </Link>
            <Link smooth={true} to="Comida - Food" offset={-70}>
                <NavBarIcon icon={ <FaHamburger size='28' />} />
            </Link>
            <Link smooth={true} to="contacto" offset={-70}>
                <NavBarIcon icon={ <IoIosContacts size='28' />} />
            </Link>
            </div>
        </div>
    )
};

const NavBarIcon = ({icon}) => {
    return (
        <div className="navBarIcon">
            {icon}
        </div>
    )
}

export default NavBar;
