# setup-xgo

This action sets up an [XGo](https://github.com/goplus/xgo) environment for use
in actions by:

- Optionally downloading and caching a version of XGo by version and adding to
  `PATH`.
- Registering problem matchers for error output.

## V1

- Supports `xgo-version` and `go-version`
- Supports SemVer.

This action installs Go, and then installs XGo using `git`.

## Usage

Version matching by [SemVer spec](https://github.com/npm/node-semver):

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: goplus/setup-xgo@v1
    with:
      go-version: '1.21.0'
      xgo-version: '1.5.0' # The XGo version to download (if necessary) and use.
  - run: xgo version
```
