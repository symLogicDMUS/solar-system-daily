import React from "react";

export interface TabsMdParams {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
