const typescript = require('./overrides/typescript');

module.exports = {
	/**
	 * use airbnb's well-reasoned style guide as base
	 * @see https://github.com/airbnb/javascript/
	 */
	extends: [
		'eslint-config-airbnb',
		'./rules/style',
		'./rules/react',
	].map(require.resolve),
	/**
	 * Add overrides for React and TypesScript environments.
	 * Note that additional eslint tooling will be required for these to work.
	 */
	overrides: [
		typescript,
	],
};
