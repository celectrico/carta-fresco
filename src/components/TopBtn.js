import React from "react";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Link } from "gatsby"

const TopBtn = () => {
    return (
        <div className="fixed bottom-16 right-0 m-3 z-40">
            <Link to="/#top-placeholder">
                <TopIcon icon={ <BsFillArrowUpSquareFill size='28' /> } />
            </Link>
        </div>
    )
};

const TopIcon= ({icon}) => {
    return (
        <div className="TopIcon">
            {icon}
        </div>
    )
}


export default TopBtn;