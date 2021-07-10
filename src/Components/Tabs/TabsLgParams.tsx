import React from "react";

export interface TabsLgParams {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
