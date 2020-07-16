module.exports = {
	extends: ['./packages/eslint-config-norton'],
	rules: {
		'import/no-extraneous-dependencies': ['error',
			{
				packageDir: [
					'.',
					'./packages/commitlint-config-ebook',
					'./packages/eslint-config-norton',
					'./packages/stylelint-config-norton',
				],
			},
		],
	},
};