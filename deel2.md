# React basics deel 2

## Loops

Als je de elementen uit een array wil tonen als HTML elementen, dan moet je voor elke array entry een element (bv. `<li>`) genereren. Dat doe je met de `map()` functie:

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {
            ideas: ["Strand opruimen", "Straat schoon vegen"]
        }
    }

    render() {
        return (
            <ul>
                {this.state.ideas.map((idea, i) => (
                    <li key={i}>{idea}</li>
                ))}
            </ul>
        )
    }
}
```

## IF statement

Als je een HTML tag alleen wil tonen onder bepaalde voorwaarden, dan kan je *conditional rendering* gebruiken. In dit voorbeeld werkt de `&&` als een `if`. Als de `awesome` variabele `true` is, dan wordt het `<h1>` element getoond:

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {
            awesome: true
        }
    }
    render(){
        return (
            <article>
                {this.state.awesome && <h1>React is awesome!</h1>};
            </article>
        )
    }
}
```

### IF met tijdelijke variabele

Je kan ook een tijdelijke variabele aanmaken met een ouderwets `if` statement en die gebruiken in je HTML code:

```javascript
render() {

    let title = "Boring"
    if(this.state.awesome) {
        title = "Awesome!"
    }

    return (
        <article>
            <h1>{title}</h1>
        </article>
    )
}
```

### IF met meerdere return statements

Als je meer uitgebreide HTML wil teruggeven met een `if-else`, dan is het leesbaarder om meerdere `return` statements te gebruiken:

```javascript
render(){
  if (this.state.awesome) {
    return (
      <article>
            <h1>React is awesome!</h1>
      </article>
    );
  } else {
      return (
        <article>
            <h1>Oh no 😢</h1>
        </article>
    )
  }
}
```

## CSS classes 

```javascript
render() {
  return <span className="menu navigation-menu">Menu</span>
}
```

### CSS class met IF 

Soms wil je een bepaalde CSS class alleen toepassen als een voorwaarde true is. 
```javascript
render() {
    let className = 'menu'
    if (this.state.awesome) {
        className += ' awesome'
    }
    return <span className={className}>Menu</span>
}
```

# Voorbeeld: LIKE button

Deze like button verdwijnt zodra je er op klikt. Dit werkt door een variabele op TRUE te zetten, en de component verschillend te renderen, afhankelijk van de variabele.

```javascript
class LikeButton extends React.Component {
  constructor() {
    super()
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <button { onClick: () => this.setState({ liked: true }) }>'Like'</button>
    )
  }
}
```

# Props

Je kan variabelen meegeven aan child components. Dit kan je gebruiken om elk component zijn eigen inhoud te geven, bijvoorbeeld:

```javascript
class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h4>React Demo App</h4>
                <Player name="Erik"/>
                <Player name="Bas"/>
            </div>
        );
    }
}
```
In de Player component komt deze waarde binnen in de `props` variabele. Die kan je als volgt gebruiken:

```javascript
class Player extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}
```

### Props zijn read-only

Let op, een component kan een prop niet aanpassen. Als je dit wel nodig hebt moet je de prop kopiëren naar een lokale state variabele.

```javascript
class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {name: this.props.name}
    }
    render() {
        return <h1>Hello, {this.state.name}</h1>
    }
}
```


# Meer lezen

[Lees hier alles over de belangrijkste React begrippen](https://reactjs.org/docs/hello-world.html)

# Een React site online zetten

De code van deze demo wordt live omgezet naar "normale" HTML. Dat werkt wel voor developen en oefenen, maar is te traag voor een "echte" website.
Zodra je een React site online zet, moet je de "production" versie van React gebruiken:

```html
<script src="https://unpkg.com/react@16/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" crossorigin></script>
```

## Code compileren

Ook moet je de Babel script tag uit je HTML verwijderen, omdat het beter is om je [React code vantevoren te compileren, in plaats van live in de browser](https://reactjs.org/docs/add-react-to-a-website.html).

