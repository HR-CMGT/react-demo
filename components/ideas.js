class Ideas extends React.Component {
    constructor() {
        super()
        this.state = { title: "React Workshop" }
    }

    changeIdeas() {
        console.log("verander hier de titel met setState()")
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={() => this.changeIdeas()}>Verander de titel</button>
            </div>
        );
    }
}