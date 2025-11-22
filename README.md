# React Modular MVVM

## Setup

1. Install **pnpm** if you haven't already:

   ```bash
   npm install -g pnpm
   ```

2. Make sure you have correct Node.js version installed as mentioned in the `.nvmrc` file. Either use **nvm** to switch to the correct version or install it manually.

   ```bash
    nvm use
   ```

3. Install project dependencies:

   ```bash
   make install-deps
   ```

4. Install the necessary browsers for Playwright testing:

    ```bash
    pnpm exec playwright install
    ```

5. Build the project:

   ```bash
   make build
   ```

6. Start the development server for web application:

   ```bash
   make web-dev
   ```

7. Preview the production build:

   ```bash
   make web-preview
   ```

Check out the `Makefile` for more commands and options.
