class Ideas extends React.Component {
    constructor() {
        super()
        this.state = {title: "React Workshop"}
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}