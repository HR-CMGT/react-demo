# Een React site online zetten

In een live website gebruik je de "production" versie van React:

```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

Ook moet je de `babel.min.js` script tag uit je HTML verwijderen. Dit script zet je React components om naar HTML, maar het is eigenlijk niet logisch dat elke bezoeker van je site telkens opnieuw de HTML moet genereren.

## Babel React installeren

Zorg dat je [NodeJS](https://nodejs.org/en/) hebt geinstalleerd. Open een terminal in je projectfolder en typ
```bash
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
```
Je kan nu de live compiler aanzetten met
```
npx babel --watch src --out-dir . --presets react-app/prod 
```
Hiermee worden de `.js` files gegenereerd die je met `<script>` tags in je `index.html` file moet laden.

## Modules en Webpack

De volgende stap in React development is om alle React code lokaal te bouwen met `import` en `export` modules. Met [Create React App](https://create-react-app.dev) kan je dit in een paar regels code doen!

# Meer lezen

- [React Tutorial Site](https://reactjs.org/docs/hello-world.html)
- [Adding react to a website](https://reactjs.org/docs/add-react-to-a-website.html).
- [Adding Routing to your app](https://reacttraining.com/react-router/web/guides/quick-start)
- [Adding a Redux store to your app](https://react-redux.js.org/)

# Finished workshop files

De finished files kan je vinden in de [finished branch](https://github.com/HR-CMGT/react-workshop/tree/finished) van deze repository.



