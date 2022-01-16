import React from "react";
import { useStaticQuery, graphql } from 'gatsby'

// if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
//    require("smooth-scroll")('a[href*="#"]', {offset: -70})
//  }


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
        <main className="w-screen h-full flex flex-col items-center relative bg-gradient-to-b from-black">
            <title>{data.site.siteMetadata.title}</title>
            {children}
        </main>
    )
}

export default Layout;