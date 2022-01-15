import React from "react";
import { IoPintSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar = () => {  

    return (

        <div className="p-2 h-10 fixed bottom-0 left-0 right-0 bg-white z-40" id='nav-bar'>
            <div className="flex flex-row justify-evenly">
            <AnchorLink to="#Nuestras Cervezas - Our Beers">
                <NavBarIcon icon={ <IoPintSharp size='28' />} />
            </AnchorLink>
            <AnchorLink to="#Bebidas - Drinks">
                <NavBarIcon icon={ <BiDrink size='28' />} />
            </AnchorLink>
            <AnchorLink to="#Comida - Food">
                <NavBarIcon icon={ <FaHamburger size='28' />} />
            </AnchorLink>
            <AnchorLink to="#contacto">
                <NavBarIcon icon={ <IoIosContacts size='28' />} />
            </AnchorLink>
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
