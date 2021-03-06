module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },

    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017,
        sourceType: 'module'
    },

    extends: [
        'standard',
        'plugin:vue/strongly-recommended'
    ],

    rules: {
        // Require semicolons
        'semi': ['error', 'always'],

        // Require 4 spaces for indents
        'indent': ['error', 4],

        // Require parentheses in arrow function arguments
        'arrow-parens': ['error', 'always'],

        // Require spacing inside of braces
        'standard/object-curly-even-spacing': ['error', 'always'],

        // Overrides for eslint-plugin-vue
        'vue/html-indent': ['error', 4, { 'alignAttributesVertically': false }],
        'vue/max-attributes-per-line': ['off'],
        'vue/name-property-casing': ['error', 'kebab-case']
    }
};
