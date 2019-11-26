# Babel project opzetten

## Mappen structuur

Maak een aparte map voor de website, en een `src` map voor de react componenten en een `prod` map voor je html, css en js files.

```
src
 ├── tips.js
 ├── ideas.js 
 └── app.js
prod
 ├── css
 ├── js 
 └── index.html
 ```

 ## Script tags

⚠️Het babel script kan je **verwijderen** uit index.html
```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
Je componenten hebben geen `type="text/jsx"` meer nodig
```html
<script src="./js/tips.js"></script>
```

# Babel installeren

```bash
npm init -y
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save-dev @babel/preset-react
```
Preset instellingen in .babelrc
```
{
    "presets": [
        ["@babel/env", {"modules": false}],
        "@babel/preset-react"
    ]
}
```

Uitvoeren
```
npx babel src --out-dir prod/js
```
File watcher
```
npx babel --watch src --out-dir prod/js
```
Voeg babel script toe aan scripts in package.json

```bash
  "scripts": {
    "start": "npx babel src --out-dir prod/js"
  },
```
Run babel
```
npm run start
```

# Live website React library

In een live website gebruik je de `production` mode van React. Pas je script tags als volgt aan:
```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```
