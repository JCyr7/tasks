import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setEdit(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit"
                checked={edit}
                onChange={updateEdit}
            />
            {edit}
            {student ? (
                <div>{name} is a student</div>
            ) : (
                <div>{name} is not a student</div>
            )}
            {edit && (
                <>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={updateName}
                            placeholder="Enter name"
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        label="student"
                        id="student"
                        checked={student}
                        onChange={updateStudent}
                    />
                </>
            )}
        </div>
    );
}
