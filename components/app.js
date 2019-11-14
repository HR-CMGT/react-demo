class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h4>React Demo App</h4>
                <Ideas/>
                <Tips/>
            </div>
        );
    }
}

ReactDOM.render(<App />, window.root);