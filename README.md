# eslint-config-raniesantos

[![Latest Version on NPM](https://img.shields.io/npm/v/eslint-config-raniesantos.svg?style=flat-square)](https://www.npmjs.com/package/eslint-config-raniesantos)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://oss.ninja/mit/raniesantos)

My personal ESLint configuration.

This config extends [eslint-config-standard](https://github.com/standard/eslint-config-standard) and [eslint-plugin-vue Strongly Recommended](https://github.com/vuejs/eslint-plugin-vue#priority-b-strongly-recommended-improving-readability) with a few opinionated overrides.

___
## Install

```bash
# Install this package as a devDependency
$ npm install --save-dev eslint-config-raniesantos

# Then install the peer dependencies
$ npm install --save-dev eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eslint-plugin-vue babel-eslint
```

Then have your project's `.eslintrc` file extend the ruleset.

```json
{
    "extends": ["raniesantos"]
}
```

___
## License

Released under the [MIT License](https://oss.ninja/mit/raniesantos).
