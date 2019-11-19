class Ideas extends React.Component {
    constructor() {
        super()

        // waarden moet je bijhouden in de STATE variabele
        this.state = {
            title: "Ideas",
            ideas: ["Strand opruimen", "Straat schoon vegen"]
        }
    }

    // waarden aanpassen via SETSTATE
    changeIdeas() {
        this.setState({
            title: "No more ideas",
            ideas: ["Snel naar huis", "Donuts halen", "React leren"]
        });
    }

    // JSON bestand inladen
    loadJSON() {
        console.log("load JSON data")
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
            </div>
        );
    }
}