# cocktail-app

# This is a Vue.js/Nuxt.js application for viewing drink categories, listing drinks by category, and displaying drink details.

## Features

- Viewing drink categories
- Listing drinks by category
- Displaying drink details
- Filtering by drink name
- "Back" button to return to the previous route

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate

# Open your browser and access: http://localhost:3000

# Technologies Used #
# Vue.js
# Nuxt.js
# Ant Design Vue
# TypeScript

# Components #
# Home Page (pages/index.vue)
# Lists drink categories
# Navigates to the drink category page when clicking on a category
# Drink Category Page (pages/category/_category.vue)
# Lists drinks from a specific category
# Filters drinks by name
# "Back" button to return to the previous page
# Drink Details Page (pages/drink/_id.vue)
# Displays details of a specific drink
# "Back" button to return to the previous page

# Services #
# cocktailService: Integrates with TheCocktailDB API to fetch category data, drinks by category, and drink details.

# Styles #
# Styles are defined using CSS classes and the Ant Design Vue library for visual elements.

# Notes #
#Make sure you have Node.js and Yarn installed in your environment.
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).
