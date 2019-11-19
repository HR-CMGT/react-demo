# React Workshop

In deze workshop oefenen we de basis concepten van React. Open index.html in *http://localhost* om de demo te bekijken, bv. met de [live server plugin voor VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Je kan rechtstreeks in de `.js` files werken om de React componenten aan te passen.

 - [Deel 1](./deel1.md) - Componenten, Button, State, Data laden
 - [Deel 2](./deel2.md) - FOR loop, IF statement, Props
 - [Deel 3](./deel3.md) - Werken met CSS
 - [Deel 4](./deel4.md) - Een React app compileren

# Wat is een SPA

Met React bouw je een **Single Page Application**, dat betekent dat je éénmalig een HTML pagina inlaadt. Die pagina bevat een volledige javascript applicatie die alle acties van de gebruiker bijhoudt.

# Componenten

Een React site bouw je op uit componenten, die zien er uit als HTML tags:

```html
<body>
    <App>
        <Ideas/>
        <Tips/>
    </App>
</body>
```
In deze workshop gebruiken we `class` notation voor React Componenten. Elke class heeft zijn eigen `.js` file. In `tips.js` kan je zien hoe een leeg React component er uit ziet. 

```javascript
class Tips extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>Tips</h1>
                <p>Hier komen de tips te staan</p>
            </div>
        )
    }
}
```

In de `render` method kan je de HTML van je component plaatsen. Dit heet `JSX` notatie.

## App component

Het "top level" component bevat meestal alleen de andere componenten die je wil gebruiken. *App.js* laat zien hoe je meerdere componenten in je app kan laden. In dit geval worden Tips en Ideas getoond.
```javascript
class App extends React.Component {
    constructor() {
        super()
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
Het top level component moet je handmatig aan de HTML DOM toevoegen met

```
ReactDOM.render(<App />, window.root)
```
## index.html

In deze workshop laad je de React componenten als `JSX` file in je `index.html`

```html
<body>

    <div id="root"></div>

    <script src="./components/ideas.js" type="text/jsx"></script>
    <script src="./components/tips.js" type="text/jsx"></script>
    <script src="./components/app.js" type="text/jsx"></script>

</body>
```

# Button events

Gebruik de arrow syntax in je `onClick` handler, om functies in je component aan te roepen.

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
    }

    buttonExample() {
        console.log("button was clicked!")
    }

    render() {
        return (
            <div>
                <button onClick={() => this.buttonExample()}>Show console message</button>
            </div>
        );
    }
}
```

# State

Een class kan properties en methods hebben, net zoals in een "gewone" OOP class. In React heb je een speciale `State` variabele. Deze wordt gebruikt om de HTML DOM automatisch te updaten als die variabele verandert. Dit noemen we `Reactive` variabelen!

Gebruik dus altijd `state` als je wil dat een waarde in je UI gebruikt kan worden. 

### State aanmaken in constructor
```javascript
this.state = {
    title:"De titel van mijn app",
    score:100,
    hiscore:false
}
```
### State veranderen buiten de constructor

Buiten de constructor gebruik je altijd `setState` om state variabelen te veranderen. Voorbeeld:
```javascript
this.setState({score:200})
```

### State tonen in UI

Je kan state variabelen in de UI plaatsen met `{this.state.title}`:

```javascript
render() {
    return (
        <div>
            <h1>{this.state.title}</h1>
        </div>
    )
}
```

### Vorige state aanpassen

Om een bestaande state aan te passen (bijvoorbeeld een nummer ophogen) moet je met een functie de vorige state opvragen:

```javascript
// counter state aanmaken
this.state = {
    counter:2
}

// één optellen bij de counter
this.setState((prevState) => ({
    counter: prevState.counter + 1
}))
```

## Voorbeeld

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        // begin state
        this.state = {
            title: "Dit is een React Demo"
        }
    }

    changeTitle() {
        // state aanpassen
        this.setState({
            title: "Dit is een andere titel"
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={() => this.changeTitle()}>Change title</button>
            </div>
        );
    }
}
```


# Data laden

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
        })
        console.log(this.state.ideas)
    }
}
```

# Vervolg workshop

 - [Deel 2](./deel2.md) - FOR loop, IF statement, Props
 - [Deel 3](./deel3.md) - Werken met CSS
 - [Deel 4](./deel4.md) - Een React app compileren

# Meer lezen

https://reactjs.org/docs/hello-world.html