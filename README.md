# Skeletal Modern JavaScript

A boilerplate for modern JavaScript development.

This is a very basic starter package and there's lot that can be added. But to
get the a solution bootstrapped quickly, this should cover most bases.

## Installation

1. `git clone` this repo
2. Run `yarn` or `npm i` to install dependencies
3. Update `.babelrc` to target different browsers (see [BrowserList](https://github.com/ai/browserslist#queries)
   to write an appropriate query).

## Tasks

These can be triggered using `yarn COMMAND` or `npm run COMMAND`.

`build` - One time build and quit
`watch` - Watches for file changes and builds when something has changed
`start` - Like watch, but runs a web server for easy front-end development

## Flow Support

1. Run `yarn add babel-preset-flow flow-bin`
2. in `.bablerc` add `flow` to the `presets` array.

(If you're running `npm` then change `yarn add` to `npm add --save`.)
