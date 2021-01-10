# [lon.sagisawa.me](https://lon.sagisawa.me)

Dead-simple personal blog built on Gatsby.

* Content delivered from Contentful.
* Uses [new.css](https://newcss.net/) for effortless styling with semantic HTML5.
* Installed TypeScript plugin but not migrated yet.
* Works as PWA.
* Syntax highlight with [prismjs](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-prismjs).

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

* [Gatsby入門](https://zenn.dev/tomokiya/books/4b13342f6d878b93e06c) (Japanese) - This inspired me to try Gatsby again. This repo is basically result of this hands on article.
* Based on [gatsbyjs/gatsby-starter-hello-world](https://github.com/gatsbyjs/gatsby-starter-hello-world)
* [Nord](https://www.nordtheme.com/) for pleasant looking color-scheme
