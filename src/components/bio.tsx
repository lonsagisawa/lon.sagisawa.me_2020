import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Bio() {
    return (
        <div>
            <footer>
                <StaticImage src="../images/logo.png" alt="logo" width={180} height={180} className="" imgClassName="" />
                <div>
                    <h1>Lon Sagisawa</h1>
                    <p>福井県在住の1995年生まれ男性。ゲームしたり写真を撮ったりコードを書いたりして過ごしています。日本国内でお仕事募集中。</p>
                    <p>GitHub <Link to="https://github.com/lonsagisawa">https://github.com/lonsagisawa</Link><br/>
                    Discord Lon_Sagisawa#5466</p>
                </div>
            </footer>
        </div>
    )
}