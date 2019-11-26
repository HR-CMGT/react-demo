# React Workshop deel 4

- Props
- Reageren op child components

## Props meegeven

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

 - [Deel 5](./tutorial/deel5.md) - CSS