interface HelmProps {
    title: string
    description?: string
}

const Helmet = ({ title, description }: HelmProps): any => {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content="/icons/icon-512x512.png" />
        </>
    )
}

export default Helmet
