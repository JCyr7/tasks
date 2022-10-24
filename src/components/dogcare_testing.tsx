import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { isValid } from "../objects";

export function Dogcare(password: string): boolean {
    const digit = /\d/;
    const special = /[!"`'#%&,:;<>=@{}~$()*+/?[\]^|]+/;
    let isValid = false;
    if (
        password.length === 16 &&
        digit.test(password) &&
        special.test(password) &&
        password[0].toLowerCase() != password[0].toUpperCase()
    ) {
        isValid = true;
    } else {
        isValid = false;
    }
    return isValid;
}
