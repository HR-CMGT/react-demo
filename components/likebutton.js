class LikeButton extends React.Component {
    constructor() {
        super()
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return (
            <button onClick={() => this.setState({ liked: true })}> 'Like'</button >
        )   
    }
}