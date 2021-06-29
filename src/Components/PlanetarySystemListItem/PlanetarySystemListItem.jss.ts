import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

export const placementTransform = (placement: string) => ({
    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
});

export const ariaControls = (open: boolean) => open ? 'menu-list-grow' : undefined;

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        paper: {
            marginRight: theme.spacing(2),
        },
    }),
);