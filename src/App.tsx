import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1>This is a header</h1>
            <header className="App-header">
                Jackson Cyr UM COS420 with React Hooks and TypeScript UM COS420
                with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <img
                src="https://static.wixstatic.com/media/135d23_dd53ee7c93e54bdc895707bbd8121492~mv2.png/v1/fill/w_560,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/135d23_dd53ee7c93e54bdc895707bbd8121492~mv2.png"
                alt="This is an image of a seagull."
            ></img>
            <ul>
                <li>Item</li>
                <li>Another item</li>
                <li>A third item</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col style={{ border: "2px solid green" }}>
                            <div
                                style={{
                                    height: "30px",
                                    width: "20px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col style={{ border: "2px solid red" }}>
                            <div
                                style={{
                                    height: "20px",
                                    width: "30px",
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
