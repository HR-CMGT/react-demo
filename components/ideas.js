class Ideas extends React.Component {
    constructor() {
        super()
        this.state = { title: "React Workshop" }
    }

    changeIdeas() {
        console.log("verander hier de titel met gebruik van setState()")
    }

    render() {
        return (
            <div>
                <h1>Plaats hier de state title</h1>
                <button>Verander de titel</button>
            </div>
        );
    }
}