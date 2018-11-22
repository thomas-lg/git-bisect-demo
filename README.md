# react-webpack-starterkit
Want to have a quick setup that allows you to play with [react](https://reactjs.org/), [webpack](https://webpack.js.org/) or [sass](https://sass-lang.com/)? Enjoy this small starter kit to begin your project. Not so much stuff in just what's needed to make your life easier ...

## Installation
Nothing fancy here
```bash
git clone https://github.com/thomas-lg/react-webpack-starterkit.git
cd react-webpack-starterkit
npm i
npm start
```

## Plugins
To work wit react it can be nice to have some plugin installed, here is my personal selection :
* [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug)
* [EditorConfig for VS Code](https://github.com/editorconfig/editorconfig-vscode)
* [ESLint](https://github.com/Microsoft/vscode-eslint)
* [GitLens — Git supercharged](https://github.com/eamodio/vscode-gitlens)
* [vscode-icons](https://github.com/vscode-icons/vscode-icons)
* [Import Cost](https://github.com/wix/import-cost)

## Script
* `npm start` : Start dev server
* `npm run start:prod` : Build and serve the build
* `npm run build` : Build for prod
* `npm run size:dev` : Size of dev, this one is here just for fun
* `npm run size:prod` : Size of prod, to spot the big bad guy and check what's going on when yu build
* `npm run lint` : Manual linting

## Alias webpack
### Webpack
To make your life easier, webpack [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) is your friend. For an example purpose some alias are setup in the `webpack.common.js`.

![alt text][alias_webpack]

### Intellisense
Webpack Alias are nice but make break intellisense because the path is now a bit different from usually. To counter that issue [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) is your friend, and allow you to enjoy all the power of the **auto-completion** and **Go To Definition** :trophy:.

![alt text][intellisense]

## SASS/SCSS
SCSS should work out of the box, the provided webpack configuration allows you to reference a `variables.scss` from anywhere in the app just with a simple :  
```css
@import 'variables';
```
This is made possible thanks to [sass-loader](https://github.com/webpack-contrib/sass-loader) and it's `includePaths` option.

## Snippet
Because snippet can also be useful, here is how to set up VS Code with the one provided and to let you know where to add your own.

This section concerned VS Code

* Hit `Ctrl+Shift+P`
* Search `Configure User Snippets`
* Select `javascriptreact.json`
* Copy/Paste the content of `snippet.json` in the root of the project into `javascriptreact.json`
* You should now have intellisense for those snippet

![alt text][snippet]

## Author
Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)

## TODO
* test management
* file-loader
* optimize webpack build
* debugger setup

[alias_webpack]: ./readme/alias_webpack.png
[snippet]: ./readme/snippet.gif "snippet"
[intellisense]: ./readme/intellisense.gif "import intellisense"
