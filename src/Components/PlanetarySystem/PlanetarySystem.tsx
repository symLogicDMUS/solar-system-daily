import React, {useRef, useEffect} from 'react';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import {ChevronRight} from "@material-ui/icons";
import MenuList from '@material-ui/core/MenuList';
import ListItem from "@material-ui/core/ListItem";
import {ListItemSecondaryAction} from "@material-ui/core";
import ListItemText from "@material-ui/core/ListItemText";
import {ClickAwayListener, IconButton} from '@material-ui/core';
import {ariaControls, placementTransform, useStyles} from "./PlanetarySystem.jss";

function PlanetarySystem(props: any) {
    const {label, children, ...other}: any = props;
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    /*return focus to the button when we transitioned from !open -> open*/
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    };

    return (
        <div className={classes.root} {...other}>
            <ListItem
                button
                aria-haspopup="true"
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
                aria-controls={ariaControls(open)}
            >
                {/*<ListItemIcon></ListItemIcon>*/}
                <ListItemText id="planet-name" primary={label} />
                <ListItemSecondaryAction>
                    <IconButton
                        edge="end"
                        onClick={handleToggle}
                    >
                        <ChevronRight />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Popper
                open={open}
                role={undefined}
                anchorEl={anchorRef.current}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={placementTransform(placement)}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={open}
                                    id="menu-list-grow"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {children}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default PlanetarySystem;