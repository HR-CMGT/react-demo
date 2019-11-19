# React Workshop deel 2

- For loops
- If statements
- Props
- Reageren op Child Components

## For Loops

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

Als je een element alleen wil tonen onder bepaalde voorwaarden, dan kan je *conditional rendering* gebruiken. In dit voorbeeld werkt de `&&` als een `if`. Als de `awesome` variabele `true` is, dan wordt het `<h1>` element getoond:

```
this.state = {
    awesome: true
}

<article>
    {this.state.awesome && <h1>React is awesome!</h1>}
</article>
```
Voor een korte `if else` kan je de `ternary operator` gebruiken:

```
<button>
    {this.state.isToggleOn ? 'ON' : 'OFF'}
</button>
```

### IF met tijdelijke variabele

Vóór het `return` statement in je `render()` functie kan je met standaard javascript je `if` statements maken.

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
      <button onClick={() => this.setState({ liked: true })}> 'Like'</button >
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

### Props in een loop

Props werken goed samen met for loops, omdat je dan elk component zijn eigen prop mee kan geven:

```javascript
render() {
    const names = ["Bas", "Erik"]

    return (
        <div>
            {names.map((name, i) => (
                <Player key={i} name={name}/>
            ))}
        </div>
    )
}
```
# Reageren op Child Components

Via props kan je data doorgeven naar Child components. 

```html
<App>
    <Player name="Erik" />
</App>
```
Je kan props ook gebruiken om te luisteren naar veranderingen in een child component.
```html
<App>
    <PLayer onScoreChange={this.handleScoreChange} />
</App>
```

## Voorbeeld

In het parent component ziet dit er als volgt uit:
```javascript
class App extends React.Component {
  constructor() {
    super()
    this.state = {score: 0}
  }

  handleScoreChange(s) {
    this.setState({score: s})
  }

  render() {
    return (
      <div>
        <Player onScoreChange={()=>this.handleScoreChange()} />
      </div>
    );
  }
}
```

In het child component kan je nu met `this.props.onScoreChange()` een event uitsturen waar de parent op kan reageren:

```javascript
class Player extends React.Component {
  constructor(props) {
    super(props)
  }

  buttonClicked() {
    this.props.onScoreChange(20)
  }

  render() {
    return (
        <div>
            <button onClick={() => this.buttonClicked()}>Test</button>
        </div>
    );
  }
}
```

# Vervolg workshop

 - [Deel 3](./deel3.md) - Werken met CSS
 - [Deel 4](./deel4.md) - Een React app compileren

# Meer lezen

https://reactjs.org/docs/hello-world.html