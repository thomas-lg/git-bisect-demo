# react-webpack-starterkit

Do you want to have a quick setup that allows you to play with [react](https://reactjs.org/), [webpack](https://webpack.js.org/), [eslint](https://github.com/eslint/eslint) or [sass](https://sass-lang.com/)? Enjoy this small starter kit to begin your project. Not so much stuff in, just what's needed to make your life easier ...

## Installation

Nothing fancy here

```bash
git clone https://github.com/thomas-lg/react-webpack-starterkit.git
cd react-webpack-starterkit
npm i
npm start
```

If you are working with the mock api

```
npm run start:dev
```

## Plugins

Personal selection of plugins :fire: :

- [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug)
- [EditorConfig for VS Code](https://github.com/editorconfig/editorconfig-vscode)
- [ESLint](https://github.com/Microsoft/vscode-eslint)
- [GitLens — Git supercharged](https://github.com/eamodio/vscode-gitlens)
- [vscode-icons](https://github.com/vscode-icons/vscode-icons)
- [Import Cost](https://github.com/wix/import-cost)
- [Prettier](https://github.com/prettier/prettier-vscode)
- [Sass](https://github.com/robinbentley/vscode-sass-indented)

## Script

- `npm start` > Start dev server
- `npm run start:prod` > Build and serve the build
- `npm run start:dev` > Start with mock api
- `npm run build` > Build for prod
- `npm run size:dev` > Size of dev, this one is here just for fun
- `npm run size:prod` > Size of prod, to spot the big bad guy and check what's going on when you build
- `npm run lint` > Manual linting

## Alias webpack

### Webpack

To make your life easier, webpack [alias](https://webpack.js.org/configuration/resolve/#resolve-alias) is your friend. Check `webpack.common.js` to see what's going on and add your own!

![alt text][alias_webpack]

### Intellisense

Webpack alias are cool but what about intellisense ... Indeed alias path may break some feature of your IDE because the path is now a bit different from usually. But guess what, to counter that issue [`jsconfig.json`](https://code.visualstudio.com/docs/languages/jsconfig) is your friend, and allow you to enjoy all the power of the **auto-completion** and **Go To Definition** provided by your IDE :trophy:.

![alt text][intellisense]

## SASS/SCSS

SCSS should work out of the box, the provided webpack configuration allows you to reference a `variables.scss` from anywhere in the app just with a simple :

```css
@import 'variables';
```

This is made possible thanks to [sass-loader](https://github.com/webpack-contrib/sass-loader) and it's `includePaths` option.

## Snippets

Because snippets can also be useful, here is how to set up VS Code with the one provided and to let you know where to add your own.

This section concerned VS Code

- Hit `Ctrl+Shift+P`
- Search `Configure User Snippets`
- Select `javascriptreact.json`
- Copy/Paste the content of `snippet.json` in the root of the project into `javascriptreact.json`
- You should now have intellisense for those snippet

![alt text][snippet]

## Author

Thomas Le Gougaud [@thomas-lg](https://github.com/thomas-lg)

## TODO

- improve test management
- copy big file instead of passing trought url-loader
- update readme with eslint-loader, behaviour of file-loader, hot reload
- hook support

[alias_webpack]: ./readme/alias_webpack.png
[snippet]: ./readme/snippet.gif 'snippet'
[intellisense]: ./readme/intellisense.gif 'import intellisense'
