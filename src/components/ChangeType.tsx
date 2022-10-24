import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qType, setqType] = useState<QuestionType>("short_answer_question");

    function flipVisibility(): void {
        // Set visible to be the logical opposite of its previous value
        if (qType === "multiple_choice_question") {
            setqType("short_answer_question");
        } else {
            setqType("multiple_choice_question");
        }
    }

    return (
        <span>
            <Button onClick={flipVisibility}>Change Type</Button>
            {qType === "multiple_choice_question" && <div>Multiple Choice</div>}
            {qType === "short_answer_question" && <div>Short Answer</div>}
        </span>
    );
}
