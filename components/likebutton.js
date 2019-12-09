class LikeButton extends React.Component {
    constructor() {
        super()
        this.state = { liked: false }
    }

    render() {
        if (this.state.liked) {
            // return hier alleen de tekst "you liked this"
        } else {
            // return hier een button die de like state kan veranderen
        }
    }
}