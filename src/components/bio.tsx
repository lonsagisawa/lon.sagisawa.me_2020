import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Bio() {
    return (
        <StaticQuery
            query = { graphql`
            {
                file(relativePath: { eq: "logo.png" }){
                    childImageSharp {
                        gatsbyImageData(layout: FIXED, width: 180, height: 180)
                    }
                }
            }
            `}
        render = { data => (
            <div className="bio">
                <div className="bio_header">
                    <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} className="bio_img" />
                    <div className="bio_side">
                        <h1 className="bio_title">Lon Sagisawa</h1>
                        <p className="bio_text">福井県在住の1995年生まれ男性。ゲームしたり写真を撮ったりコードを書いたりして過ごしています。日本国内でお仕事募集中。</p>
                        <p className="bio_text"><Link to="https://fedibird.com/@ls" rel="me">Mastodon</Link> / <Link to="https://github.com/lonsagisawa">GitHub</Link> / <Link to="https://twitter.com/lsgsw">Twitter</Link> / <Link to="https://twitch.tv/lonsagisawa">Twitch</Link></p>
                    </div>
                </div>
            </div>
            )
        }
        />
    )
}