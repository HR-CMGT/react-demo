# React Workshop deel 3

### JSON data laden

Met `fetch` kan je een externe JSON file inladen. Als deze geladen is kan je gegevens uit de JSON file naar je `state` kopiëren:

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
## Opdracht

Maak nu zelf een button die de `loadJSON()` functie aanroept.
Maak ook een `render()` functie die de inhoud van de JSON array toont als `<li>` elementen.


# Vervolg workshop

 - [Deel 4](./deel4.md) - Props, Reageren op Child Components
 - [Deel 5](./deel5.md) - CSS