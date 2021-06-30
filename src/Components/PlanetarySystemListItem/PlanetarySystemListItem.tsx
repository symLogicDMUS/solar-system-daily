import React from 'react';
import {ChevronRight} from "@material-ui/icons";
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { useStyles } from "./PlanetarySystemListItem.jss";
import {ClickAwayListener, List, ListItem, Paper, Portal} from "@material-ui/core";

function PlanetarySystemListItem(props: any) {
    const {label, index, currentMenu, setCurrentMenu, children, ...other}: any = props;
    const classes = useStyles({index: index});

    const open = Boolean(currentMenu===label);

    return (
        <div className={classes.root} {...other}>
            <ListItem button onMouseEnter={() => setCurrentMenu(label)}>
                <ListItemText>{label}</ListItemText>
                <ListItemIcon>
                    <ChevronRight />
                </ListItemIcon>
            </ListItem>
            {open && (
                <Portal>
                    <ClickAwayListener onClickAway={() => setCurrentMenu(null)}>
                        <List className={classes.planetAndMoonsMenu}>
                            {children}
                        </List>
                    </ClickAwayListener>
                </Portal>
            )}
        </div>
    );
}

export default PlanetarySystemListItem;