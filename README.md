# React Demo

Dit is een eenvoudige demo om de basis concepten van React te oefenen.

Open index.html in *http://localhost* om de demo te bekijken, bv. met de [live server plugin voor VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Je kan rechtstreeks in de `.js` files werken om de React componenten aan te passen.
Je hebt *geen* build process nodig! Je code werkt meteen.

## Een React component

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

## App component

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

## Button events

Gebruik deze syntax om functies in je component aan te roepen vanuit een button.

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

## State

Een class kan properties en methods hebben, net zoals in een "gewone" OOP class. In React heb je een speciale `State` variabele. Deze wordt gebruikt om de HTML DOM automatisch te updaten als die variabele verandert. 

Gebruik dus altijd `state` als je wil dat een waarde in je interface gebruikt kan worden. 

#### State aanmaken
```
this.state = {
    title:"De titel van mijn app",
    score:100,
    hiscore:false
}
```
#### State wijzigen

Gebruik altijd `this.setState({score:200})` om variabelen in de state aan te passen. 

#### State tonen

Je kan variabelen uit je state tonen in je HTML componenten: `<h1>{this.state.title}</h1>`

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


## JSON

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

# Deel 2

[Ga verder met loops, if statements en props in deel 2 van deze demo!](./deel2.md)