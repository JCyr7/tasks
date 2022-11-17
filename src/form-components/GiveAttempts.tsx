import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(parseInt(event.target.value));
    }

    function useButton() {
        setAttempts(attempts - 1);
    }

    function gainButton() {
        if (!isNaN(request)) {
            setAttempts(attempts + request);
            setRequest(0);
        }
    }

    return (
        <Form.Group className="mb-3">
            <Form.Label>Attempts: </Form.Label>
            {attempts}
            <Form.Control
                type="number"
                value={request}
                onChange={updateRequest}
                placeholder="Enter Number Of Attempts To Gain"
            />
            <button disabled={attempts === 0} onClick={useButton}>
                use
            </button>
            <button onClick={gainButton}>gain</button>
        </Form.Group>
    );
}
