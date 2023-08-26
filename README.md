<h1 align="center">
Forms practice
</h1>

<div align="center">

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

</div>

## Development

### Prerequisites

* [Node js](https://nodejs.org/en)

### Recommended

* [pnpm](https://pnpm.io/) 
* [Node js - v16.x.x](https://nodejs.org/en/blog/release/v16.16.0)

### Make it your own

To get a local copy, clone it using:
```sh
git clone https://github.com/castromaciel/forms-practice.git
```

Or get it downloading

```sh
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

To install dependencies use one of the following commands:

```sh
npm install
```

```sh
yarn install
```

```sh
pnpm install
```

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| pnpm build    | Builds the app for production to the `dist` folder. |
| pnpm coverage | Runs tests with code coverage                       |
| pnpm dev      | Runs the app in the development mode.               |
| pnpm preview  | Start a local web server that serves the built solution from ./dist for previewing |
| pnpm prepare  | Install husky githooks                              |
| pnpm test     | Runs tests with vitest.                             |

## Base Dependencies

- [axios](https://github.com/axios/axios) for networking.
- [sass](https://sass-lang.com/) for stylesheets.
- [vitest](https://vitest.dev/) for testing.

## Folder Structure

```
template-vite-react-ts
├── .github
    ├── workflows
├── .husky
    ├── pre-commit
    ├── pre-push
├── node_modules
├── public
│   └── vite.svg
└── src
    ├── __tests__
        ├── App.test.tsx
    ├── assets
        ├── react.svg
    ├── components
    ├── constants
        ├── index.ts
    ├── App.scss
    ├── App.tsx
    ├── index.scss
    ├── main.tsx
    └── vite-env.d.ts
├── .env.development
├── .eslintignore
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── .lintstagedrc
├── .npmrc
├── index.html
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.js
├── vitest.config.js
```

## husky config

To create husky githooks, you need to run `npm prepare` or `pnpm prepare`, and then configure your githooks with 

```sh
npx husky add .husky/<pre-hookname> "command you want to configure"
```

For example, the initial config has been created with: 
```sh
npx husky add .husky/pre-commit "npx lint-staged"
```

```sh
npx husky add .husky/pre-push "pnpm test"
```

You are free to modify the configuration.


## Styleguide

For coding styling, I decided to use [eslint](https://eslint.org/) and the [eslint-airbnb configuration](https://github.com/airbnb/javascript#readme), with some personal modifications.

## Credits

Vite Template React with TypeScript is built and maintained by [Castro Maciel](https://github.com/castromaciel)

## License

This project is licensed under the terms of the [MIT license](./LICENSE).
