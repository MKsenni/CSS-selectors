module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: ["plugin:@typescript-eslint/recommended", "eslint:recommended"],
    parser: "@typescript-eslint/parser",
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: '**tsconfig.json',
    },
    plugins: ["@typescript-eslint"],
    root: true,
    rules: {
        "@typescript-eslint/no-explicit-any": 2,
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        // '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/array-type': [
        'error',
            {
            default: 'array',
            },
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
            accessibility: 'explicit',
            overrides: {
                accessors: 'explicit',
                constructors: 'off',
                methods: 'explicit',
                properties: 'explicit',
                parameterProperties: 'explicit',
            },
            },
        ],
        'max-lines-per-function': ['error', 40],
        '@typescript-eslint/explicit-function-return-type': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        }
}
