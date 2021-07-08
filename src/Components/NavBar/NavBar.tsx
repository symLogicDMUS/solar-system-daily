import React, {useState} from "react";
import {ClickAwayListener, List} from "@material-ui/core";
import PlanetOrMoonListItem from "../PlanetOrMoonListItem/PlanetOrMoonListItem";
import PlanetarySystemListItem from "../PlanetarySystemListItem/PlanetarySystemListItem";

function NavBar() {
    const [currentMenu, setCurrentMenu] = useState(null);

    return (
        <ClickAwayListener onClickAway={() => setCurrentMenu(null)}>
            <List>
                <PlanetarySystemListItem
                    index={0}
                    label="Mercury System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem
                        label="Mercury (planet)"
                        page="mercury"
                    />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={1}
                    label="Venus System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem
                        label="Venus (planet)"
                        page="venus"
                    />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={2}
                    label="Earth System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Earth (planet)" page="earth" />
                    <PlanetOrMoonListItem label="Moon" page="moon" />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={3}
                    label="Mars System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Mars (planet)" page="mars" />
                    <PlanetOrMoonListItem label="Phobos" page="phobos" />
                    <PlanetOrMoonListItem label="Deimos" page="deimos" />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={4}
                    label="Jupiter System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Jupiter (planet)" page="jupiter" />
                    <PlanetOrMoonListItem label="Ganymede" page="ganymede" />
                    <PlanetOrMoonListItem label="Europa" page="europa" />
                    <PlanetOrMoonListItem label="Io" page="io" />
                    <PlanetOrMoonListItem label="Callisto" page="callisto" />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={5}
                    label="Saturn System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Saturn (planet)" page="saturn" />
                    <PlanetOrMoonListItem label="Titan" page="titan" />
                    <PlanetOrMoonListItem label="Enceladus" page="enceladus" />
                    <PlanetOrMoonListItem label="Mimas" page="mimas" />
                    <PlanetOrMoonListItem label="Dione" page="dione" />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={6}
                    label="Uranus System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Uranus (planet)" page="uranus" />
                    <PlanetOrMoonListItem label="Umbriel" page="umbriel" />
                    <PlanetOrMoonListItem label="Ariel" page="ariel"/>
                    <PlanetOrMoonListItem label="Titania" page="titania" />
                    <PlanetOrMoonListItem label="Miranda" page="miranda" />
                </PlanetarySystemListItem>
                <PlanetarySystemListItem
                    index={7}
                    label="Neptune System"
                    currentMenu={currentMenu}
                    setCurrentMenu={setCurrentMenu}
                >
                    <PlanetOrMoonListItem label="Neptune (planet)" page="uranus" />
                    <PlanetOrMoonListItem label="Proteus" page="proteus" />
                    <PlanetOrMoonListItem label="Nereid" page="nereid" />
                    <PlanetOrMoonListItem label="Larissa" page="larissa" />
                </PlanetarySystemListItem>
            </List>
        </ClickAwayListener>
    );
}

export default NavBar;