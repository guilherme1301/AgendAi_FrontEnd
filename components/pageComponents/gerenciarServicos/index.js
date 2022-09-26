import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { EditingState } from '@devexpress/dx-react-grid';
import styles from '../../../styles/SearchService.module.css';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableEditRow,
    TableEditColumn,
} from '@devexpress/dx-react-grid-material-ui';

import {
    generateRows,
    defaultColumnValues,
} from '../gerenciarServicos/demo-data/generator';

const getRowId = row => row.id;

export default () => {
    const [columns] = useState([
        { name: 'name', title: 'Nome do serviço' },
        { name: 'desc', title: 'Descrição' },
        { name: 'duration', title: 'Duração' },
        { name: 'price', title: 'Preço' },
    ]);
    const [rows, setRows] = useState(generateRows({
        columnValues: { id: ({ index }) => index, ...defaultColumnValues },
        length: 8,
    }));

    const commitChanges = ({ added, changed, deleted }) => {
        let changedRows;
        if (added) {
            const startingAddedId = rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
            changedRows = [
                ...rows,
                ...added.map((row, index) => ({
                    id: startingAddedId + index,
                    ...row,
                })),
            ];
        }
        if (changed) {
            changedRows = rows.map(row => (changed[row.id] ? { ...row, ...changed[row.id] } : row));
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
        }
        setRows(changedRows);
    };

    return (
        <Paper>
            {/* <Grid item xs={12} className={styles.tituloEmpresa}>Descrição Serviços</Grid> */}
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
            >
                <EditingState
                    onCommitChanges={commitChanges}
                />
                <Table />
                <TableHeaderRow />
                <TableEditRow />
                <TableEditColumn
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                />
            </Grid>
        </Paper>
    );
};