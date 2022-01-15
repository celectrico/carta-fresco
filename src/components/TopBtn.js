import React from "react";
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const TopBtn = () => {
    return (
        <div className="fixed bottom-16 right-0 m-3 z-40">
            <AnchorLink to="#top-placeholder">
                <TopIcon icon={ <BsFillArrowUpSquareFill size='28' /> } />
            </AnchorLink>
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