import React, {Component} from "react"
import "./Display.css"
import Button from 'react-bootstrap/Button';

export default class Display extends Component {
        render(){
                return <div id="main">
                        <h1 id="letters"></h1>
                        <button type="button" className="btn btn-secondary btn-lg">Large button</button>

                </div>
        }
}