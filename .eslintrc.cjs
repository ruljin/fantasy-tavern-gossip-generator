module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
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
