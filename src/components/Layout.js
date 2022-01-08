import React from "react";
import { useStaticQuery, graphql } from 'gatsby'



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
        <div className="h-screen flex bg-gray-300 relative">
            <title>{data.site.siteMetadata.title}</title>
            {children}
        </div>
    )
}

export default Layout;