# Monorepo Template

## What's inside?

This template includes the following packages/apps:

### Apps and Packages

- `webapp`: a [Vite](https://vitejs.dev/) based [React](https://react.dev/) app

- `api`: an [esbuild](https://esbuild.github.io/) based [Express.js](https://expressjs.com/) app

- `shared-code`: a Typescript library to share code between the frontend and backend

---

### Utilities

This template has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking

- [ESLint](https://eslint.org/) for code linting

- [Prettier](https://prettier.io) for code formatting

---

### Installing packages

```bash
# Install as a dependency
$ yarn workspace <project name> add <package name> e.g. yarn workspace webapp add react-hook-form

# Install as a dev-dependency
$ yarn workspace webapp add -D tailwindcss

# Just swap out the package name to install packages in other projects. The "project name" is the value of the "name" field written in the package.json file.
```

---

### Build

To build all apps and packages, run the following command:

```bash
$ yarn build
```

---

### Development

Follow the steps in the README files in all projects then come back here and follow the next steps...

`Docker Compose`:

```bash
# Runs the process in the background, remove the "-d" flag if you want to run it in the current terminal process
$ docker compose -f docker-compose.dev.yml down --volumes && docker compose -f docker-compose.dev.yml build --parallel && docker compose -f docker-compose.dev.yml up -d
```

---
