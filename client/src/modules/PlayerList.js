import React, { Component } from 'react';
import Player from "./Player";


class PlayerList extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {

        return (
            <ul id="hexGrid">
                <Player />
            </ul>
        )
    }
}
export default PlayerList;