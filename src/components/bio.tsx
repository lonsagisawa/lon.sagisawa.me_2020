// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import { css } from "@emotion/react"

const Container = styled.div({
    margin: "1rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (min-width: 480px)": {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})

const BioText = styled.div({
    fontSize: "0.9rem",
    h2: {
        fontSize: "1.5rem",
        fontWeight: 700,
        marginBottom: "0.5rem",
    },
    "@media screen and (min-width: 480px)": {
        maxWidth: "32rem",
    },
})

const BioImg = css({
    borderRadius: "100px",
    margin: "1rem 0",
})

const Bio = (): any => {
    return (
        <Container>
            <StaticImage
                src="../images/logo.png"
                width={200}
                height={200}
                alt="logo"
                css={BioImg}
            />
            <BioText>
                <h2>Lon Sagisawa(鷺沢ろん)</h2>
                <p>
                    1995年、日本国・福井県に生まれる。
                    <br />
                    個人開発として15年以上のHTMLとCSS、10年以上のLinuxサーバー管理の経験を持つ。
                    <br />
                    2014年頃から費用を抑えながらパフォーマンスの優れたWebサイトを構築するためJekyll,
                    Hexo,
                    Hugoといった静的サイトジェネレーターでのWebサイト構築を行う中、Gatsbyとの出会いをきっかけにモダンWebフロントエンドの世界を知る。
                    <br />
                    従前から取り組んでいた静的サイト構築がJamstackとして飛躍的な発展を遂げる中で、TypeScript,
                    React, Emotion,
                    GraphQLなど、Gatsbyで使われるものを中心にWebフロントエンドスタックの習得に励む。
                    <br />
                    趣味としてビデオゲーム(音楽ゲーム等)、写真撮影、F1観戦、eスポーツ観戦、P業(喜多日菜子,
                    周防桃子, 桑山千雪)を嗜む。
                </p>
            </BioText>
        </Container>
    )
}

export default Bio
