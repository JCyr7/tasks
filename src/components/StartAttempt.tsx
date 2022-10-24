import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [attempts, setAttempts] = useState<number>(4);

    function startProgress(): void {
        // Set visible to be the logical opposite of its previous value
        if (progress === false && attempts !== 0) {
            setProgress(true);
            setAttempts(attempts - 1);
        }
    }

    function stopProgress(): void {
        // Set visible to be the logical opposite of its previous value
        if (progress === true) {
            setProgress(false);
        }
    }

    function Mulligan(): void {
        // Set visible to be the logical opposite of its previous value
        setAttempts(attempts + 1);
    }

    return (
        <span>
            <Button onClick={startProgress} disabled={progress}>
                Start Attempt
            </Button>
            <Button onClick={stopProgress} disabled={!progress}>
                Stop Attempt
            </Button>
            <Button onClick={Mulligan}>Mulligan</Button>
            Attempts: {attempts}
        </span>
    );
}
