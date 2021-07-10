import React from "react";

export interface AppBarLgParams {
    value: number;
    title: string;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
