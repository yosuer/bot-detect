This package was bootstrapped with Margaret Framework.

More information can be found in [Margaret's documentation.](https://dev.prod.hulu.com/margaret-frameworks/web)

## Available Scripts

**`npm run build`**

Creates a transpiled bundle a package.

**`npm run lint`**

Runs linting for a package.

**`npm run lint:fix`**

Runs the same linting process as in the `npm run lint` command, but also attempts to auto-fix any `ESLint` errors. If errors are not possible to auto-fix, you will need to resolve them manually.

**`npm run stylelint`**

Runs linting of CSS for a package.

**`npm run stylelint:fix`**

Runs the same linting process as in the `npm run stylelint` command, but also attempts to auto-fix any errors. If errors are not possible to auto-fix, you will need to resolve them manually.

**`npm run test`**

Runs tests for a package.

**`npm run test:coverage`**

Runs tests and generates coverage reports. A report is printed to `stdout` while other formats (e.g., json, html) are written to a `coverage` directory within each package of the monorepo.

**`npm run test:watch`**

Executes tests in a watch mode for a package.

**`npm run typecheck`**

Runs the TypeScript compiler without emitting any compiled files. It is useful to check if your code is type-safe and you are using the type system correctly.

**`npm run generate-type-declaration`**

Generates type declaration (`index.d.ts`) files for a package.
It is called automatically as a precommit hook when any `.ts` or `.tsx` file was created or modified.
