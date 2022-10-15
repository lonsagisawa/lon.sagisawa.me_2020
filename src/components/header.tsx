import * as React from "react"
import { Link } from "gatsby"
import { tw } from "twind"

const Header = () => {
    return (
        <header className={tw`max-w-4xl mx-auto py-10 px-4 sm:py-20`}>
            <h1>
                <Link to="/" className={tw`font-black text(transparent 6xl) bg(clip-text gradient-to-r) from-amber-400 to-orange-500 tracking-tighter`}>Lon<br/>Sagisawa</Link>
            </h1>
        </header>
    )
}

export default Header