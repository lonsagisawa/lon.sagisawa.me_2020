# [lon.sagisawa.me](https://lon.sagisawa.me)

My personal blog built on Gatsby 4.

* Content delivered from Contentful.
* Follows modern best practice as I could.
* Designed for build on Gatsby Cloud, deploy to Vercel.
* Utilize [Emotion](https://emotion.sh) for styling.
* Installed TypeScript plugin for type safety, but not migrated yet.
* Works as PWA.
* Syntax highlight with Shiki.
* RSS feed.
* 95+ Lighthouse performance score. Reaches 100 in individual article page.

## Usage

``` shell
# .env.development
CONTENTFUL_SPACE_ID="{Your Contentful space ID}"
CONTENTFUL_ACCESS_TOKEN="{Your Contentful access token}"
CONTENTFUL_HOST="cdn.contentful.com"
```

```shell
npm i
npm run dev
```

## Thanks to

* [Gatsby入門](https://zenn.dev/tomokiya/books/4b13342f6d878b93e06c) (Japanese) - This inspired me to try Gatsby again. This repo was basically result of this hands-on, but after my development and migration work to Gatsby v2, v3 and v4 it's been different.
* Based on [gatsbyjs/gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)
