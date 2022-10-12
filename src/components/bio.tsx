import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { tw } from "twind"
import { apply, css } from "twind/css"

export default function Bio() {
    const bioStyle = css( apply`my-auto`, {
        a: apply`underline hover:text-gray-200 transition`,
    })

    return (
        <footer className={tw`bg-gray-800 dark:bg-black text-gray-500 dark:text-gray-600 py-12`}>
            <div className={tw`sm:(grid grid-cols-2 justify-between) px-4 mx-auto max-w-4xl`}>
                <div className={tw(bioStyle, `pb-8 sm:pb-0`)}>
                    {/* <StaticImage src="../images/logo.png" alt="logo" width={180} height={180} className="rounded-xl" imgClassName="rounded-xl" /> */}
                    <p className={tw`font-black text-3xl tracking-tighter`}>Lon<br />Sagisawa</p>
                    <p className={tw`text-xs`}>Content All rights reserved. Code is <Link href="https://github.com/lonsagisawa/lon.sagisawa.me">available</Link> at 0BSD license.<br />Powered by <Link href="https://www.gatsbyjs.com">Gatsby</Link> and <Link href="https://twind.dev">Twind</Link>. Hosted on <Link href="https://vercel.com">Vercel</Link>.</p>
                </div>
                <div className={tw(bioStyle, `text-center sm:text-right`)}>
                    <Link href="https://github.com/lonsagisawa" className={tw`text-4xl`}><FontAwesomeIcon icon={faGithub} /></Link>
                </div>
            </div>
        </footer>
    )
}