import React, { Component } from 'react';



class Player extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    randomImage = () => {
        return `/images/original_(${Math.floor((Math.random() * 100) + 1)}).png`

    }
    render() {

        return (
            <li class="hex">
                <div class="hexIn">
                    <a class="hexLink" href="#">
                        <img src={this.randomImage()} alt="" />
                        <h1>Player NAME<br/>Char NAME</h1>
                        <p>
                            Class<br/>
                            Race<br/>
                            AC: 00<br/>
                            HP 00/MAX<br/>

                        </p>
                    </a>
                </div>
            </li>
        )
    }
}
export default Player;