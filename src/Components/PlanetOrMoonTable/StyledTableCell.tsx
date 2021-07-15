import {paper} from "../../theme.jss";
import {darken} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import {createStyles, Theme, withStyles} from "@material-ui/core/styles";

export const StyledTableCell = withStyles((theme: Theme) =>
    createStyles({
        head: {
            backgroundColor: darken(paper, 0.1),
            color: theme.palette.text.secondary,
        },
        body: {
            fontSize: 14,
        },
    }),
)(TableCell);