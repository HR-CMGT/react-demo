# React Workshop deel 2

- For loops en arrays
- If statements

## For Loops

Een state kan arrays bevatten. Om een array te renderen in HTML is het mooi om er `<div>` of `<li>` elementen van te maken.

In React kan je met de `map()` functie een array omzetten naar HTML elementen:

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {
            ideas: ["React leren", "Donuts halen", "Naar huis fietsen"]
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

## Een waarde toevoegen aan de state array

Omdat je altijd via `setState()` moet werken, kan je niet via `this.state.ideas.push("idee")` een item aan een array toevoegen.

In plaats daarvan moet je via `setState(ideas:newArray)` een nieuwe array doorgeven, die alle waarden van de oude array bevat, plus de nieuwe waarde. De kortste manier om dat te doen is:

```javascript
this.setState({ ideas: [...this.state.ideas, 'nieuw idee'] }) 
```

## IF statement

Als je een element alleen wil tonen onder bepaalde voorwaarden, dan kan je *conditional rendering* gebruiken. In dit voorbeeld werkt de `&&` als een `if`. Als de `awesome` variabele `true` is, dan wordt het `<h1>` element getoond:

```javascript
this.state = { awesome: true }

<article>
    {this.state.awesome && <h1>React is awesome!</h1>}
</article>
```
Voor een korte `if else` kan je de `ternary operator` gebruiken:

```javascript
<button>
    {this.state.awesome ? 'ON' : 'OFF'}
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
      return 'You liked this.'
    }

    return (
      <button onClick={() => this.setState({ liked: true })}> 'Like'</button >
    )
  }
}
```

## Opdracht

Plaats het `<LikeButton /> component in de Ideas en Tips componenten!

# Vervolg workshop

 - [Deel 3](./deel3.md) - JSON data laden
 - [Deel 4](./deel4.md) - Props, Reageren op Child Components
 - [Deel 5](./deel5.md) - CSS

# Meer lezen

https://reactjs.org/docs/hello-world.html