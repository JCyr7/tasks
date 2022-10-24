import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎃");
    const yearOrder = ["🗺️", "🙆‍♂️", "🎃", "🦃", "🎁"];
    const alphaOrder = ["🙆‍♂️", "🎁", "🗺️", "🎃", "🦃"];
    function cycleYear(): void {
        if (yearOrder.indexOf(holiday) === yearOrder.length - 1) {
            setHoliday(yearOrder[0]);
        } else {
            setHoliday(yearOrder[yearOrder.indexOf(holiday) + 1]);
        }
    }

    function cycleAlphabet(): void {
        if (alphaOrder.indexOf(holiday) === alphaOrder.length - 1) {
            setHoliday(alphaOrder[0]);
        } else {
            setHoliday(alphaOrder[alphaOrder.indexOf(holiday) + 1]);
        }
    }

    return (
        <span>
            <Button onClick={cycleYear}>Advance By Year</Button>
            <Button onClick={cycleAlphabet}>Advance By Alphabet</Button>
            Holiday: {holiday}
        </span>
    );
}
