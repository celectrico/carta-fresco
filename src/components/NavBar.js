import React from "react";
import { IoPintSharp } from 'react-icons/io5';
import { BiDrink } from 'react-icons/bi';
import { FaHamburger } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
import { GiFoxHead } from 'react-icons/gi';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const NavBar = () => {  

    return (

        <div className="h-24 fixed top-0 left-0 right-0 bg-gray-200" id='nav-bar'>
            <div className="flex flex-row p-1">
                <div className="p-1 m-2"><GiFoxHead size='28' /></div><div className="text-2xl w-full flex justify-center items-center p-1 text-black">FRESCO BAR</div>
            </div>
            <div className="flex flex-row justify-evenly">
            <AnchorLink to="/#CERVEZAS - BEERS">
                <NavBarIcon icon={ <IoPintSharp size='28' />} />
            </AnchorLink>
            <AnchorLink to="/#CERVEZAS - BEERS">
                <NavBarIcon icon={ <BiDrink size='28' />} />
            </AnchorLink>
            <AnchorLink to="/#SANDWICHS">
                <NavBarIcon icon={ <FaHamburger size='28' />} />
            </AnchorLink>
            <AnchorLink to="/#NOSOTROS">
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
