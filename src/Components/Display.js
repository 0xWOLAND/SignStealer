import React, {Component} from "react"
import "./Display.css"
import Button from 'react-bootstrap/Button';

export default class Display extends Component {
        render(){
                return <div id="main">
                        <div id="letters"></div>
                        <button type="button" class="btn btn-secondary btn-lg">Large button</button>

                </div>
        }
}