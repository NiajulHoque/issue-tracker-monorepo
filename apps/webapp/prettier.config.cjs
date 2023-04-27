module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^@/shared-code$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  singleQuote: true,
  trailingComma: 'none',
  printWidth: 100,
  arrowParens: 'always',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: true,
  semi: true,
  useTabs: false,
  tabWidth: 2,
  bracketSameLine: true
};
