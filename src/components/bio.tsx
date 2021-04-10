import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Bio() {
    return (
        <div className="container mx-auto px-8 max-w-3xl">
            <footer className="flex flex-col sm:flex-row content-around">
                <StaticImage src="../images/logo.png" alt="logo" width={180} height={180} className="rounded-full mx-auto sm:mx-0" imgClassName="rounded-full" />
                <div className="max-w-md mx-auto my-4 sm:my-auto py-auto text-center sm:text-left">
                    <h1 className="text-3xl font-heading font-bold mb-2">Lon Sagisawa</h1>
                    <p className="my-2">福井県在住の1995年生まれ男性。ゲームしたり写真を撮ったりコードを書いたりして過ごしています。日本国内でお仕事募集中。</p>
                    <p><Link to="https://fedibird.com/@ls" rel="me" className="underline">Mastodon</Link> / <Link to="https://github.com/lonsagisawa" className="underline">GitHub</Link> / <Link to="https://twitter.com/lsgsw" className="underline">Twitter</Link> / <Link to="https://twitch.tv/lonsagisawa" className="underline">Twitch</Link></p>
                </div>
            </footer>
        </div>
    )
}