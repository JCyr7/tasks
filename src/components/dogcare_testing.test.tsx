import React from "react";
import { render, screen } from "@testing-library/react";
import { Dogcare } from "./dogcare_testing";

describe("Dogcare testing Component tests", () => {
    test("Password length must be 16 characters", () => {
        expect(Dogcare("A1@abcdefghijk3a")).toBe(true);
    });
    test("Must contain at least 1 number", () => {
        expect(Dogcare("A1@abcdefghijk3a")).toBe(true);
    });
    test("Must contain at least 1 special character", () => {
        expect(Dogcare("A1@abcdefghijk3a")).toBe(true);
    });
    test("First character must be a letter", () => {
        expect(Dogcare("A1@abcdefghijk3a")).toBe(true);
    });
    test("Password length must not be <= 15", () => {
        expect(Dogcare("A1@abcdefghij")).toBe(false);
    });
    test("Password length must not be >= 15", () => {
        expect(Dogcare("A1@abcdesddddddddddddfghij")).toBe(false);
    });
    test("Password must not contain 0 numbers", () => {
        expect(Dogcare("abcdef$hijkfa")).toBe(false);
    });
    test("Password must not contain 0 special characters", () => {
        expect(Dogcare("abcdef2hijkfa")).toBe(false);
    });
    test("First character must not be a number", () => {
        expect(Dogcare("1bcdef$hijkfa")).toBe(false);
    });
    test("First character must not be a special character", () => {
        expect(Dogcare("$bcdef$hijkfa")).toBe(false);
    });
});
