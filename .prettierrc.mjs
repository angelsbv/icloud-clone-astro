/** @type {import("prettier").Config} */
export default {
  printWidth: 90,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    }
  ],
};