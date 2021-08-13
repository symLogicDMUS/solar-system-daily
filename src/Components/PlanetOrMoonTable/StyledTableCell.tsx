import TableCell from "@material-ui/core/TableCell";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.background.paper,
            fontWeight: 500,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);