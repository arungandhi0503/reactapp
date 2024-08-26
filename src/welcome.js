import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            fullname: ""
        }
        // this.updateName = this.updateName.bind(this);
    }

    updateName(name) {
        this.setState({ fullname: name });
    }

    render() {
        const { firstname, lastname } = this.props;
        return (
            <div>
                <h3>Hello {firstname} {lastname}</h3>
                <button onClick={() => this.updateName('John Doe')}>Update name</button><br />
                {this.state.fullname}
            </div>
        )
    }
}

export default Welcome;