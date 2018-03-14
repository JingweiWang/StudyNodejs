module.exports = {
    "env": {
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 7
    },
    "rules": {
        "indent": [
            "off",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        'no-console': 'off',
        'no-unused-vars': 'off',
    }
};