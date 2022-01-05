import React from "react";
import { useStaticQuery, graphql } from 'gatsby'
import './layout.css';



const Layout = ({children}) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
    `)

    return (
        <div>
            <title>{data.site.siteMetadata.title}</title>
            {children}
        </div>
    )
}

export default Layout;