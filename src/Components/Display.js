import React, { Component } from "react";
import "./Display.css";
import * as tf from "@tensorflow/tfjs";
import firebase from "firebase";
import { callbacks, tensor3d, sequential, metrics } from "@tensorflow/tfjs";

var firebaseConfig = {
        apiKey: "AIzaSyClnyjRv9Zgfkvj2S6g4cZDyjCwhscCMN8",
        authDomain: "signstealer-9e2f1.firebaseapp.com",
        databaseURL: "https://signstealer-9e2f1.firebaseio.com",
        projectId: "signstealer-9e2f1",
        storageBucket: "signstealer-9e2f1.appspot.com",
        messagingSenderId: "390621554995",
        appId: "1:390621554995:web:4055ac885d448a9cc93646",
        measurementId: "G-3W6JW19F8M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export default class Display extends Component {
        constructor(props) {
                super(props);
                this.render = this.render.bind(this);
                this.handleSteal = this.handleSteal.bind(this);
                this.handleNoSteal = this.handleNoSteal.bind(this);
                this.predict = this.predict.bind(this);
                this.state = { steal: false };
        }
        handleSteal() {
                db.collection("Elements").add({
                        str: document.getElementById("letters").innerText,
                        isSteal: true,
                });
        }
        handleNoSteal() {
                db.collection("Elements").add({
                        str: document.getElementById("letters").innerText,
                        isSteal: false,
                });
        }
        async predict() {
                db.collection("Elements")
                        .get()
                        .then(function (querySnapshot) {
                                querySnapshot.forEach(function (doc) {
                                        console.log(doc.id, " => ", doc.data());
                                });
                        });
                const X = tf.tensor3d([
                        [[4], [1], [2]],
                        [[3], [5], [2]],
                        [[1], [6], [7]],
                        [[2], [1], [0]],
                        [[5], [4], [3]],
                        [[6], [8], [9]],
                        [[1], [2], [3]],
                        [[2], [3], [4]],
                        [[5], [5], [5]],
                ]);
                const y = tf.tensor3d([
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                        [[0], [0], [0]],
                ]);
                console.log(X.shape);
                console.log(y.shape);
                const model = sequential();
                model.add(tf.layers.dense({ units: 1, inputShape: [3, 1] }));
                model.add(tf.layers.dense({ units: 1, activation: "sigmoid" }));

                model.compile({
                        optimizer: "sgd",
                        loss: "binaryCrossentropy",
                        metrics: ["mse", "acc"],
                });
                model.fit(X, y, { epochs: 250 });
                console.log(model.predict(tf.tensor3d([[[5], [2], [9]]])).print());
        }
        render() {
                return (
                        <div id="main">
                                <div id="letterContainer">
                                        <h1 id="letters"></h1>
                                </div>
                                <div
                                        id="inputButton"
                                        class="btn-group"
                                        role="group"
                                        aria-label="Basic example"
                                >
                                        <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={this.handleSteal}
                                        >
                                                Steal
                                        </button>
                                        <button
                                                type="button"
                                                className="btn btn-secondary"
                                                onClick={this.handleNoSteal}
                                        >
                                                No Steal
                                        </button>
                                </div>
                                <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={this.predict}
                                >
                                        Predict
                                </button>
                        </div>
                );
        }
}
