// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"

interface HelmProps {
    title: string
    description?: string
}

const Helmet = ({ title, description }: HelmProps): any => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
        </>
    )
}

export default Helmet
