import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>Answer</Form.Label>
            <Form.Control
                value={answer}
                onChange={updateAnswer}
                placeholder="Enter Answer"
            />
            {answer === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </Form.Group>
    );
}
