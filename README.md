# directus-interface--base

This is the repository set up to creating custom interfaces for Directus.

Read the docs first: https://docs.directus.io/guides/interfaces/

It should probably be also a good starter for implementing custom modules and displays.

Tested on Directus `v9.0.0-rc.50`

## Contents

- [x] TypeScript!
- [x] Vue and other deps in good versions following that comment https://github.com/directus/directus/issues/4401#issuecomment-799412544
- [x] Rollup setup to build the project
- [x] Vue dev server to be able to easy develop with hot reload
- [x] ESLint
- [x] React in vue solution to allow to develop in React instead of Vue (dramatically increasing bundle size due to `react-dom`)

The commits in this repo are quite descriptive, so if you do not wantReact, juts checkout previous commit :)

## Developing

Run `npm run dev` to open a dev server.

## Building and using in Directus

Run `npm run build` and copy the `index.js` from the `dist` directory to your `<EXTENSIONS_PATH>/interfaces/<INTERFACE_NAME>` folder.

## Hacking Vue typings

To be able to work with Vue + TS `Vue.extend` must be used to have valid typings in the component options object.

Usage of this function enforces us to `import Vue from 'vue` and ofc increases bundle size. Moreover Directus seems to not be able to read the component created via `Vue.extend`.

This forced me to use the hack in the bundle. The `vue` package is aliased to `./vue-alias.js` during the build and inside this file there is an object with extend property as in function.

## Troubleshooting

If you have a problem with React JSX types it is probably due to `shims-tsx.d` and `Element` type declared there. You can safely remove it as you will do your component mostly in React.

If Directus do not shows your interface, you can check three things:

1. See if `GET` response from `http://localhost:8055/extensions/interfaces/` contains your new interface
2. It first is check then check in browser network tab if your `index.js` file is downloaded.
3. If these 2 are check, probably there is an error in the file but Directus must catch errors from custom modules. Lest pause on exceptions (including catched), blackbox all non-relevant scripts and find your error!
