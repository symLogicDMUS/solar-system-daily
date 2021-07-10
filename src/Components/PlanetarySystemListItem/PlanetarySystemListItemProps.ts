import React from "react";

export interface PlanetarySystemListItemProps {
    label: string;
    index: number;
    currentMenu: string | null;
    setCurrentMenu: any;
    children: React.ReactNode;
}
