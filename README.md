# React Workshop

In deze workshop oefenen we de basis concepten van React. 

- Download de bestanden van deze repository.
- Open index.html in *http://localhost* om de demo te bekijken, bv. met de [live server plugin voor VS Code](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Je kan rechtstreeks in de `.js` files werken om de React componenten aan te passen.

 # Workshop Goals

- Componenten, State, Button
- FOR loop, IF statement in een component
- JSON data laden
- Props, Reageren op Child Components
- CSS

# Herhaling Workshop 10 december

## Components

Een component heeft een constructor en methods, net zoals een gewone class. Een component heeft een `render` functie die de UI toont. De `constructor` kan weg als je daar verder geen code in zet.
```javascript
class Tips extends React.Component {
    constructor(){
        super()
        console.log("Ik ben een component")
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

## Child Components

Plaats child components in je app

```html
<div>
  <Tips />
  <Ideas />
</div>
```
## State

Gebruik `state` in de constructor, en `setState()` in de rest van je component. De state bevat alle variabelen waar je mee wil gaan werken.

```javascript
constructor(){
    this.state = {name:"Erik"}
}
changeName(){
    this.setState({name:"Bob"})
}
```
Gebruik { } om de state in de UI te renderen.
```html
render() {
    return <h1>{this.state.name}</h1>
}

```

## Props

Props doorgeven aan een child component
```
<Footer name="Henk" />
```
Props gebruiken in het child component
```
render() {
    return <h1>{this.props.name}</h1>
}
```
## Buttons

Gebruik de `()=>` syntax om de methods van je component aan te roepen vanuit een button:

```javascript
class Ideas extends React.Component {

    showMessage() {
        console.log("button is aangeklikt")
    }

    render() {
        return <button onClick={()=>this.showMessage()}>Show Console Message</button>
    }
}
```

## IF statement

Met een `if statement` return je verschillende HTML als de state verandert. Deze LIKE button verandert zijn state bij een Click, en daardoor verandert de weergave.

```javascript
class LikeButton extends React.Component {
    constructor() {
        super()
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return <p>You liked this</p>
        } 

        return <button onClick={()=>this.setState({liked:true})}>LIKE!</button>
    }
}
```

# For loop

Als je state een array bevat, wil je vaak een HTML element renderen voor *elk element in de array*. Daar kan je de `map()` functie voor gebruiken. Let op het gebruik van `key`, dit is verplicht in React.

```javascript
class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {
            ideas : ["React leren", "Naar huis fietsen"]
        }
    }
    render() {
        // genereer p tags voor de array
        let myPTags = this.state.ideas.map((idea, i) => 
            <p key={i}>Idee is {idea}</p>
        )

        return (
            <div>
                {myPTags}
            </div>
        )
    }
}
```