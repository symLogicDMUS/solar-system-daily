import TableCell from "@material-ui/core/TableCell";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: "#263238",
            color: theme.palette.text.secondary,
            fontWeight: 500,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);