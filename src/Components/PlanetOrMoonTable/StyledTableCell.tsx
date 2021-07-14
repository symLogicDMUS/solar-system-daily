import {createStyles, Theme, withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: theme.palette.secondary.main,
            color: '#72e2ff',
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);