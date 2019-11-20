# JSX compileren met Babel

Tot nu toe hebben we *live in de browser* de React JSX componenten omgezet naar normale HTML/Javascript. Voor de performance is het beter om dit vantevoren te doen.

## Babel tag verwijderen

⚠️Het babel script kan je **verwijderen** uit index.html
```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

## Mappen structuur

Maak een aparte map voor de website, en een `src` map voor de `jsx` componenten.

## Babel compiler installeren

Zorg dat je [NodeJS](https://nodejs.org/en/) hebt geinstalleerd. Open een terminal in je projectfolder en typ
```bash
npm init -y
npm install babel-cli@6 babel-preset-react-app@3
```
Je kan nu de live compiler aanzetten met
```
npx babel --watch src --out-dir . --presets react-app/prod 
```
Als je nu werkt in je JSX files, dan worden automatisch de `.js` files gegenereerd. De gegenereerde JS moet je met `<script>` tags in je `index.html` file laden.

Je kan de file watcher stoppen met `ctrl+c`

## Typescript

Het is eenvoudig om typescript te gebruiken! Je kan een babel preset gebruiken die ook typescript omzet:

```
npm install --save-dev @babel/preset-typescript
```
.babelrc bestand
```
{
  "presets": ["@babel/preset-typescript"]
}
```
Je moet ook de `typings` installeren, zodat Typescript snapt wat React is
```
npm install --save-dev @types/react
```
Hernoem je bestanden naar `.ts` en `.tsx` zodat de compiler weet dat dit Typescript bestanden zijn.

## HTML script tags

In de live website gebruik je de `production` mode van React. Pas je script tags als volgt aan:
```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```
