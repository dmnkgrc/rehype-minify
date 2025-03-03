<!--This file is generated by `build-packages.js`-->

# rehype-remove-comments

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Remove comments (except conditional comments).

When configured with `force: true` (default: `false`), conditional comments
are also removed.

## Install

[npm][]:

```sh
npm install rehype-remove-comments
```

## Example

##### In

```html
<!--Hello-->
<!--[if IE 6]>OK<![endif]-->
```

##### Out

```html
<!--[if IE 6]>OK<![endif]-->
```

## Contribute

See [`contributing.md`][contributing] in [`rehypejs/.github`][health] for ways
to get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

[build-badge]: https://img.shields.io/travis/rehypejs/rehype-minify.svg

[build]: https://travis-ci.org/rehypejs/rehype-minify

[coverage-badge]: https://img.shields.io/codecov/c/github/rehypejs/rehype-minify.svg

[coverage]: https://codecov.io/github/rehypejs/rehype-minify

[downloads-badge]: https://img.shields.io/npm/dm/rehype-remove-comments.svg

[downloads]: https://www.npmjs.com/package/rehype-remove-comments

[size-badge]: https://img.shields.io/bundlephobia/minzip/rehype-remove-comments.svg

[size]: https://bundlephobia.com/result?p=rehype-remove-comments

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/rehype

[npm]: https://docs.npmjs.com/cli/install

[health]: https://github.com/rehypejs/.github

[contributing]: https://github.com/rehypejs/.github/blob/master/contributing.md

[support]: https://github.com/rehypejs/.github/blob/master/support.md

[coc]: https://github.com/rehypejs/.github/blob/master/code-of-conduct.md

[license]: https://github.com/rehypejs/rehype-minify/blob/master/license

[author]: https://wooorm.com
