# React Workshop deel 1

In deze workshop oefenen we de basis concepten van React. Open index.html in *http://localhost* om de demo te bekijken, bv. met de [live server plugin voor VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Je kan rechtstreeks in de `.js` files werken om de React componenten aan te passen.

 - [Deel 1](./README.md) - Componenten, State, Button
 - [Deel 2](./tutorial/deel2.md) - FOR loop, IF statement in een component
 - [Deel 3](./tutorial/deel3.md) - JSON data laden
 - [Deel 4](./tutorial/deel4.md) - Props, Reageren op Child Components
 - [Deel 5](./tutorial/deel5.md) - CSS
 
# Componenten

Een React site bouw je op uit componenten, die zien er uit als HTML tags:

```html
<App>
    <Navigation/>
    <Products>
        <LikeButton/>
    </Products>
    <Tips/>
</App>
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

Het "top level" component bevat meestal alleen de andere componenten die je wil gebruiken. 

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

# State

Variabelen in het `state` object zijn *Reactive*. In de constructor zet je de state. Om de state te tonen in de UI gebruik je `{this.state...}` in je `render()` functie:

### Voorbeeld

```javascript
class Tips extends React.Component {
    constructor() {
        super()
        this.state = { title:"React Workshop" }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}
```

### State veranderen buiten de constructor

Buiten de constructor gebruik je altijd `setState` om state variabelen te veranderen. Voorbeeld:
```javascript
class Tips extends React.Component {
    changeTitle(){
        this.setState({title:"Just another React Workshop"})
    }
}
```

### Vorige state aanpassen

Om een bestaande state aan te passen (bijvoorbeeld een nummer ophogen) moet je met een functie de vorige state opvragen:

```javascript
class Tips extends React.Component {
    constructor() {
        super()
        this.state = { counter:1 }
    }
    addNumber(){
        this.setState((state) => ({
            counter: state.counter + 1
        }))
    }
}
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


# Vervolg workshop

 - [Deel 2](./tutorial/deel2.md) - FOR loop, IF statement in een component
 - [Deel 3](./tutorial/deel3.md) - JSON data laden
 - [Deel 4](./tutorial/deel4.md) - Props, Reageren op Child Components
 - [Deel 5](./tutorial/deel5.md) - CSS

# Meer lezen

https://reactjs.org/docs/hello-world.html