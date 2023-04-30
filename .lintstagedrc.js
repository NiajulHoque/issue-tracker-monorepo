module.exports = {
  // Type check TS files
  "**/*(js|jsx|ts|tsx)": () => "yarn typecheck",

  // Lint & Prettify TS and JS files
  "**/*.(js|jsx|ts|tsx)": () => [`yarn format`, `yarn lint`],

  // Prettify only Markdown and JSON files
  "**/*.(md|json)": (filenames) =>
    `yarn prettier --write ${filenames.join(" ")}`,
};
