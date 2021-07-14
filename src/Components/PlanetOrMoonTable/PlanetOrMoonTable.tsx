import React from 'react';
import {rows} from "./rows";
import {columns} from "./columns";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import {Container} from "@material-ui/core";
import {StyledTableCell} from "./StyledTableCell";
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import {useStyles} from "./PlanetOrMoonTable.jss";

function PlanetOrMoonTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // @ts-ignore
    const pagination = <TablePagination
                            page={page}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            rowsPerPageOptions={[10, 25, 100]}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            onChangePage={handleChangePage}
                        />

    return (
        <Container className={classes.root} disableGutters>
            <Paper>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <StyledTableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </StyledTableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                {pagination}
            </Paper>
        </Container>
    );
}

export default PlanetOrMoonTable;