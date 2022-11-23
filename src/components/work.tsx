import styled from "@emotion/styled"

const Wrapper = styled.div({
    display: "grid",
    gap: "1rem",
    gridTemplateColumns: "none",
    "@media screen and (min-width: 480px)": {
        gridTemplateColumns: "1fr 1fr",
    },
})

const Card = styled.a({
    fontSize: "0.9rem",
    padding: "1rem 1.25rem",
    borderRadius: "1rem",
    backgroundColor: "#f9fafd",
    border: "2px solid #f9fafd",
    transition: "all 100ms ease-out",
    boxShadow: "0px 2px 6px 0px rgba(32, 32, 44, 0.25);",
    ":hover": {
        boxShadow: "0px 4px 12px 0px rgba(32, 32, 44, 0.25);",
    },
    "@media (prefers-color-scheme: dark)": {
        backgroundColor: "#17171f",
        boxShadow: "none",
        border: "2px solid #17171f",
        ":hover": {
            border: "2px solid #f4d059",
            backgroundColor: "#1f1f29",
            boxShadow: "none",
        },
    },
    h2: {
        fontSize: "1.1rem",
        fontWeight: 700,
    },
})

const Pill = styled.span(
    {
        fontWeight: 700,
        fontSize: "0.75rem",
        margin: "0 0.2rem",
        padding: "0 0.5rem",
        borderRadius: "999px",
        display: "inline-block",
    },
    (props) => ({
        backgroundColor: props.bgcolor,
        color: props.textcolor,
    })
)

const Work = (): any => {
    return (
        <Wrapper>
            <Card href="https://github.com/lonsagisawa/kitahina.co">
                <h2>kitahina.co</h2>
                <p>
                    2022年
                    <Pill bgcolor="#663399" textcolor="white">
                        Gatsby
                    </Pill>
                    <Pill bgcolor="#fcb32c" textcolor="white">
                        MDX
                    </Pill>
                    <Pill bgcolor="black" textcolor="white">
                        styled-components
                    </Pill>
                </p>
                <p>
                    私のアイドルマスターシリーズ関連の活動をまとめる場所であり、喜多日菜子の宣伝も兼ねた小さなWebサイトです。以前はEleventyで構築されていましたが、現在はGatsby+MDXで構築されています。以前このブログはこのURLに置かれていました。
                </p>
            </Card>
            <Card href="https://github.com/lonsagisawa/lon.sagisawa.me">
                <h2>lon.sagisawa.me</h2>
                <p>
                    2020年
                    <Pill bgcolor="#663399" textcolor="white">
                        Gatsby
                    </Pill>
                    <Pill bgcolor="#003cbe" textcolor="white">
                        Contentful
                    </Pill>
                    <Pill bgcolor="#D26AC2" textcolor="white">
                        Emotion
                    </Pill>
                </p>
                <p>
                    このポートフォリオ兼ブログです。Gatsbyで構築され、コンテンツはContentfulから配信されており、
                    Gatsby
                    CloudでビルドとCIが行われ、Vercelでホストされています。
                </p>
            </Card>
            <Card href="https://github.com/lonsagisawa/ghost-theme-stardust">
                <h2>Stardust</h2>
                <p>
                    2017年
                    <Pill bgcolor="#f0772b" textcolor="white">
                        Handlebars
                    </Pill>
                    <Pill bgcolor="#712cf9" textcolor="white">
                        Bootstrap
                    </Pill>
                </p>
                <p>
                    ブログシステム
                    Ghost用のテーマです。現在のGhostはヘッドレスCMSになっていますが、当時はミニマルなブログシステムでした。
                </p>
            </Card>
            <Card href="https://kitahina.co/dict">
                <h2>アイドルマスターシリーズ SKK辞書</h2>
                <p>
                    2016年
                    <Pill bgcolor="black" textcolor="white">
                        SKK辞書
                    </Pill>
                    <Pill bgcolor="black" textcolor="white">
                        bash
                    </Pill>
                    <Pill bgcolor="black" textcolor="white">
                        sed
                    </Pill>
                </p>
                <p>
                    アイドルマスターシリーズに関する語句を収録した、各種SKK実装用の追加辞書です。SKKをお使いの多くのプロデューサーさんにご愛用いただいています。
                </p>
            </Card>
        </Wrapper>
    )
}

export default Work
