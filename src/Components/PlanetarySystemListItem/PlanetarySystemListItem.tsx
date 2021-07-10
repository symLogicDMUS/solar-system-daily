import React from "react";
import { ChevronRight } from "@material-ui/icons";
import { List, ListItem, Portal } from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { useStyles } from "./PlanetarySystemListItem.jss";

function PlanetarySystemListItem(props: any) {
    const {
        label,
        index,
        currentMenu,
        setCurrentMenu,
        children,
        ...other
    }: any = props;
    const classes = useStyles({ index: index });

    const open = Boolean(currentMenu === label);

    return (
        <div className={classes.root} {...other}>
            <ListItem
                button
                onClick={() => setCurrentMenu(label)}
                onMouseEnter={() => setCurrentMenu(label)}
            >
                <ListItemText>{label}</ListItemText>
                <ListItemIcon>
                    <ChevronRight />
                </ListItemIcon>
            </ListItem>
            {open && (
                <Portal>
                    <List className={classes.planetAndMoonsMenu}>
                        {children}
                    </List>
                </Portal>
            )}
        </div>
    );
}

export default PlanetarySystemListItem;
