# [lon.sagisawa.me](https://lon.sagisawa.me)

Over-developed ~my experimental room for Gatsby/Jamstack~ personal blog built on Gatsby 3.x.

* Content delivered from Contentful.
* Follows modern best practice as I could.
* Designed for build on Gatsby Cloud, deploy to Firebase Hosting.
* Uses [Tailwind CSS](https://tailwindcss.com/) for fully custom styling with ease.
* Installed TypeScript plugin for type safety, but not migrated yet.
* Works as PWA until offline required.
* Syntax highlight with Shiki.
* RSS feed.
* 100 Lighthouse performance score.

## Usage

``` shell
# .env.development
CONTENTFUL_SPACE_ID="{Your Contentful space ID}"
CONTENTFUL_ACCESS_TOKEN="{Your Contentful access token}"
CONTENTFUL_HOST="cdn.contentful.com"
```

```shell
yarn global add gatsby-cli
yarn
gatsby develop
```

## Thanks to

* [Gatsby入門](https://zenn.dev/tomokiya/books/4b13342f6d878b93e06c) (Japanese) - This inspired me to try Gatsby again. This repo was basically result of this hands-on, but after my over-developing it's starting to be different.
* Based on [gatsbyjs/gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)
* [Nord](https://www.nordtheme.com/) for pleasant looking color-scheme
