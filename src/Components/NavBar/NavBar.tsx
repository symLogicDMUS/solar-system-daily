import React from "react";
import {List} from "@material-ui/core";
import PlanetarySystem from "../PlanetarySystem/PlanetarySystem";
import PlanetOrMoon from "../PlanetOrMoon/PlanetOrMoon";
// import { useStyles } from "./NavBar.jss";

function NavBar() {

    return (
        <List>
            <PlanetarySystem label="Mercury System">
                <PlanetOrMoon name="Mercury (planet)" page="mercury" />
            </PlanetarySystem>
            <PlanetarySystem label="Venus System">
                <PlanetOrMoon label="Venus (planet)" page="venus" />
            </PlanetarySystem>
            <PlanetarySystem label="Earth System">
                <PlanetOrMoon label="Earth (planet)" page="earth" />
            </PlanetarySystem>
            <PlanetarySystem label="Mars System">
                <PlanetOrMoon label="Mars (planet)" page="mars" />
            </PlanetarySystem>
            <PlanetarySystem label="Jupiter System">
                <PlanetOrMoon label="Jupiter (planet)" page="jupiter" />
                <PlanetOrMoon label="Ganymede" page="ganymede" />
                <PlanetOrMoon label="Europa" page="europa" />
                <PlanetOrMoon label="Io" page="io" />
                <PlanetOrMoon label="Callisto" page="callisto" />
            </PlanetarySystem>
            <PlanetarySystem label="Saturn System">
                <PlanetOrMoon label="Saturn (planet)" page="saturn" />
                <PlanetOrMoon label="Titan" page="titan" />
                <PlanetOrMoon label="Enceladus" page="enceladus" />
                <PlanetOrMoon label="Mimas" page="mimas" />
            </PlanetarySystem>
            <PlanetarySystem label="Uranus System">
                <PlanetOrMoon label="Uranus (planet)" page="uranus" />
            </PlanetarySystem>
            <PlanetarySystem label="Neptune System">
                <PlanetOrMoon label="Neptune (planet)" page="uranus" />
            </PlanetarySystem>
        </List>
    );
}

export default NavBar;