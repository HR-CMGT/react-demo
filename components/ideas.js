class Ideas extends React.Component {
    constructor() {
        super()

        // waarden moet je bijhouden in de STATE variabele
        this.state = {
            title: "Greening",
            ideas: ["Strand opruimen", "Straat schoon vegen"]
        }
    }

    // waarden aanpassen via SETSTATE
    changeIdeas() {
        this.setState({
            title: "No more ideas for today",
            ideas: ["Snel naar huis", "Donuts halen", "React leren"]
        });
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
            title: "Loaded ideas from JSON",
            ideas: json.ideas
        });
    }

    // HTML tonen
    render() {
        // hier maken we een <li> item voor elk idee in de array
        let listItems = this.state.ideas.map((idea, i) =>
            <li key={i}>{idea}</li>
        )

        // in html kan je { } gebruiken om naar data te verwijzen
        return (
            <div>
                <h1>{this.state.title}</h1>
                <ul>{listItems}</ul>
                <button onClick={() => this.changeIdeas()}>Change ideas</button>
                <button onClick={() => this.loadJSON()}>Load JSON</button>
            </div>
        );
    }
}