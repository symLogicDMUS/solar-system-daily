import React from "react";
import {List} from "@material-ui/core";
import PlanetarySystem from "../PlanetarySystemListItem/PlanetarySystemListItem";
import PlanetOrMoonListItem from "../PlanetOrMoonListItem/PlanetOrMoonListItem";

function NavBar() {

    return (
        <List>
            <PlanetarySystem label="Mercury System">
                <PlanetOrMoonListItem name="Mercury (planet)" page="mercury" />
            </PlanetarySystem>
            <PlanetarySystem label="Venus System">
                <PlanetOrMoonListItem label="Venus (planet)" page="venus" />
            </PlanetarySystem>
            <PlanetarySystem label="Earth System">
                <PlanetOrMoonListItem label="Earth (planet)" page="earth" />
                <PlanetOrMoonListItem label="Moon" page="moon" />
            </PlanetarySystem>
            <PlanetarySystem label="Mars System">
                <PlanetOrMoonListItem label="Mars (planet)" page="mars" />
                <PlanetOrMoonListItem label="Phobos" page="phobos" />
                <PlanetOrMoonListItem label="Deimos" page="deimos" />
            </PlanetarySystem>
            <PlanetarySystem label="Jupiter System">
                <PlanetOrMoonListItem label="Jupiter (planet)" page="jupiter" />
                <PlanetOrMoonListItem label="Ganymede" page="ganymede" />
                <PlanetOrMoonListItem label="Europa" page="europa" />
                <PlanetOrMoonListItem label="Io" page="io" />
                <PlanetOrMoonListItem label="Callisto" page="callisto" />
            </PlanetarySystem>
            <PlanetarySystem label="Saturn System">
                <PlanetOrMoonListItem label="Saturn (planet)" page="saturn" />
                <PlanetOrMoonListItem label="Titan" page="titan" />
                <PlanetOrMoonListItem label="Enceladus" page="enceladus" />
                <PlanetOrMoonListItem label="Mimas" page="mimas" />
                <PlanetOrMoonListItem label="Dione" page="dione" />
            </PlanetarySystem>
            <PlanetarySystem label="Uranus System">
                <PlanetOrMoonListItem label="Uranus (planet)" page="uranus" />
                <PlanetOrMoonListItem label="Umbriel" page="umbriel" />
                <PlanetOrMoonListItem label="Ariel" page="ariel"/>
                <PlanetOrMoonListItem label="Titania" page="titania" />
                <PlanetOrMoonListItem label="Miranda" page="miranda" />
            </PlanetarySystem>
            <PlanetarySystem label="Neptune System">
                <PlanetOrMoonListItem label="Neptune (planet)" page="uranus" />
                <PlanetOrMoonListItem label="Proteus" page="proteus" />
                <PlanetOrMoonListItem label="Nereid" page="nereid" />
                <PlanetOrMoonListItem label="Larissa" page="larissa" />
            </PlanetarySystem>
        </List>
    );
}

export default NavBar;