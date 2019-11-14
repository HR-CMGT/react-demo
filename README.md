# React Demo

Dit is een eenvoudige demo om de basis concepten van React te oefenen.

Open index.html in *http://localhost* om de demo te bekijken, bv. met de [live server plugin voor VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Je kan rechtstreeks in de `.js` files werken om de React componenten aan te passen.
Je hebt *geen* build process nodig! Je code werkt meteen.

### De componenten

*Tips.js* laat zien hoe een leeg React component er uit ziet. Dit lijkt erg op een normale OOP Class notatie. Je hebt een `render` functie om HTML te tonen.

```javascript
class Tips extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>Tips</h1>
                <p>Hier komen de tips te staan</p>
            </div>
        );
    }
}
```

### App

Het "top level" component bevat meestal alleen de andere componenten die je wil gebruiken.

*App.js* laat zien hoe je meerdere componenten in je app kan laden. In dit geval worden Tips en Ideas getoond.
```javascript
class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h4>React Demo App</h4>
                <Ideas/>
                <Tips/>
            </div>
        );
    }
}
```

### State

In *Ideas.js* zie je hoe je met variabelen kan werken. Gebruik `this.state` en `this.setState` om waarden bij te houden in je class.
```javascript
// begin state
this.state = {
    title: "Greening"
}

// state aanpassen
this.setState({
    title: "No more ideas for today"
}
```

In je HTML kan je { } karakters gebruiken om variabelen uit de state te tonen.
```javascript
<h1>{this.state.title}</h1>
```


### Button

Gebruik deze syntax om de scope van je buttons gelijk te houden aan de scope van je app.
```javascript
class Ideas extends React.Component {
    constructor() {
        super()
    }

    changeIdeas() {
        console.log("button was clicked!")
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeIdeas()}>Change ideas</button>
            </div>
        );
    }
}
```

### JSON

Door externe JSON in te laden met `fetch` kan je de state van je app aanpassen.

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {
            ideas: []
        }
    }

    // JSON bestand inladen
    loadJSON() {
        fetch('./ideas.json')
            .then((response) => response.json())
            .then((data) => this.dataWasLoaded(data))
            .catch((error) => console.error('help'))
    }

    dataWasLoaded(json) {
        this.setState({
            ideas: json.ideas
        });
    }
}
```

## Meer lezen

[Lees meer over componenten, props en listeners](https://reactjs.org)

## Production ready

De code van deze demo wordt live omgezet naar "normale" HTML, maar dat is traag.
Om een "echte" React site te maken moet je de "production" versie van React gebruiken, en je moet vantevoren je [Componenten omzetten naar HTML met een build tool](https://reactjs.org/docs/add-react-to-a-website.html).

```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```
