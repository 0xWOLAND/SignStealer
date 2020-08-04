import React, { Component } from "react";
import "./Display.css";
import * as tf from '@tensorflow/tfjs';

export default class Display extends Component {
        render() {
                return (
                        <div id="main">
                                <div id="letterContainer">
                                <h1 id="letters"></h1></div>
                                <div
                                id="inputButton"
                                        class="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                >
                                        <button
                                                type="button"
                                                class="btn btn-secondary"
                                        >
                                                Steal
                                        </button>
                                        <button
                                                type="button"
                                                class="btn btn-secondary"
                                        >
                                                No Steal
                                        </button>
                                </div>
                        </div>
                );
        }
}
