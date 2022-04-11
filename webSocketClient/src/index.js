import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import { w3cwebsocket as W3CWebSocket } from 'websocket';

// Websocket and progress bar aren't friends
// https://stackoverflow.com/questions/25253463/are-websockets-the-right-technology-to-be-used-to-update-progress-bars-for-the-c
const client = new W3CWebSocket('wss://localhost:5001/ws');
// Trying server-side events
// https://itnext.io/server-side-event-streams-with-dotnet-core-and-typescript-d20c84017480
// const eventSource = new EventSource("/sse", { withCredentials: true } );

import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default class App extends Component {
    onButtonClicked = (value) => {
        client.send("linda")
    }
    componentDidMount(){
        client.onopen = () => {
            console.log('WebSocket Client Connected')
        };

        client.onmessage = (message) => {
            //const dataFromServer = JSON.parse(messsage.data);
            //var trimMsg = explode('\u0000', json_encode(messsage));
            console.log('got a reply: ', message);
        };
    }
    render() {
        return (
            <div>
                <button onClick={() => this.onButtonClicked("Hello!")}>Send Message</button>
                <Progress percent={88} status="success" />
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));