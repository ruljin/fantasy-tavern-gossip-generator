module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:react-hooks/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"no-duplicate-imports": "error",
		"no-unreachable": "error",
		"@typescript-eslint/no-unused-vars": "error",
		eqeqeq: "error",
		"max-depth": ["error", 3],
		"no-console": "warn",
		"no-magic-numbers": [
			"error",
			{
				ignore: [0, 1],
			},
		],
		"no-var": "error",
		"prefer-const": "error",
		"block-spacing": ["error", "always"],
		"comma-style": ["error", "last"],
		indent: ["error", "tab"],
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1,
			},
		],
		"max-len": [
			"error",
			{
				code: 120,
			},
		],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
			},
		],
		"no-trailing-spaces": ["error"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/space-before-blocks": ["error"],
		"@typescript-eslint/space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
	},
};
