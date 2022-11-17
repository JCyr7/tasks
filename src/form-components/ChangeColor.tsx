import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "yellow",
    "white",
    "black"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    const sty = {
        backgroundColor: color
    };

    return (
        <div>
            <Form.Check
                style={{ backgroundColor: "red" }}
                type="radio"
                label="red"
                name="emotions"
                value="red"
                checked={color.includes("red")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "blue" }}
                type="radio"
                label="blue"
                name="emotions"
                value="blue"
                checked={color.includes("blue")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "green" }}
                type="radio"
                label="green"
                name="emotions"
                value="green"
                checked={color.includes("green")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "orange" }}
                type="radio"
                label="orange"
                name="emotions"
                value="orange"
                checked={color.includes("orange")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "purple" }}
                type="radio"
                label="purple"
                name="emotions"
                value="purple"
                checked={color.includes("purple")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "yellow" }}
                type="radio"
                label="yellow"
                name="emotions"
                value="yellow"
                checked={color.includes("yellow")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "white" }}
                type="radio"
                label="white"
                name="emotions"
                value="white"
                checked={color.includes("white")}
                onChange={updateColor}
            />
            <Form.Check
                style={{ backgroundColor: "black" }}
                type="radio"
                label="black"
                name="emotions"
                value="black"
                checked={color.includes("black")}
                onChange={updateColor}
            />
            You have chosen
            <div data-testid="colored-box" style={sty}>
                {color}
            </div>
            .
        </div>
    );
}
