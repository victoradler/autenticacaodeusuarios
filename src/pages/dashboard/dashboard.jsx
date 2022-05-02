import React from "react";
import { Avatar, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

import "./dashboard.css";

export function Dashboard () {
    function createData(id, nome, email) {
        return { id, nome, email };
    }

    const rows = [
        createData('#001', "Teste", "teste@teste")
    ];

    return (
        <div className="dashboard">
            <header className="header-dashboard">
                <div className="user-area">
                    <Avatar alt="User" src="/static/images/avatar/1.jpg" />
                    <span className="user-name">User</span>
                </div>

                <Button 
                    variant="contained" 
                    color="secondary"
                >
                    Sair
                </Button>
            </header>

            <h3 className="table-headline">Outros usuários:</h3>

            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="right">Nome</TableCell>
                        <TableCell align="right">Email</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
        </div>
    );
}
