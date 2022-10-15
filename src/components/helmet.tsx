import * as React from "react"
import type { HeadProps } from "gatsby"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Helmet = ({ title, description, pathname, children }: HeadProps) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        siteUrl,
        twitterUsername
    } = useSiteMetadata()

    const helm = {
        title: title + " | " + defaultTitle || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
        twitterUsername,
    }

    return (
        <>
            <title>{ helm.title }</title>
            <meta name="description" content={ helm.description } />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter.title" content={ helm.title } />
            <meta name="twitter.url" content={ helm.url } />
            <meta name="twitter.description" content={ helm.description } />
            <meta name="twitter:creator" content={ helm.twitterUsername } />
            { children }
        </>
    )
}
export default Helmet