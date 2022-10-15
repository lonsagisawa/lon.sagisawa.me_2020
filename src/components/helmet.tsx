import * as React from "react"
import { Helmet } from "react-helmet"
import { tw } from 'twind'

const Head = ({ title, description }) => {
    return (
        <Helmet
            htmlAttributes = {{ lang: "ja-JP" }}
            title = { title }
            titleTemplate = { `%s` }
            meta = {[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `Lon Sagisawa`
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
            ]}
        >
            <body className={tw`text-gray-900 bg-gray-100 dark:text-gray-100 dark:bg-gray-900`} />
        </Helmet>
    )
}

export default Head