import React from "react";

export interface AppBarMdParams {
    value: number;
    title: string;
    handleDrawerToggle: () => void;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
