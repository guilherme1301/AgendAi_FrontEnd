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
            console.log("Buceta");
        }
        if (deleted) {
            const deletedSet = new Set(deleted);
            changedRows = rows.filter(row => !deletedSet.has(row.id));
            console.log("Cu do Cassiano");
        }
        setRows(changedRows);
    };

    return (
        <Paper className={styles.campo}>
            <div className={styles.return}>
                <svg className={styles.svgreturn} width="25" height="14" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7173 0.449368C15.161 0.893146 15.2014 1.58759 14.8383 2.07694L14.7173 2.21714L3.93504 12.9999L14.7173 23.7827C15.161 24.2265 15.2014 24.9209 14.8383 25.4103L14.7173 25.5505C14.2735 25.9942 13.579 26.0346 13.0897 25.6715L12.9495 25.5505L1.28282 13.8838C0.839046 13.44 0.798702 12.7456 1.16179 12.2562L1.28282 12.116L12.9495 0.449368C13.4376 -0.0387869 14.2291 -0.0387869 14.7173 0.449368Z" fill="black" />
                </svg>
                <h3 onClick={() => router.back()}>Voltar</h3>
            </div>
            
            {/* <Grid item xs={12} className={styles.tituloEmpresa}>Descrição Serviços</Grid> */}
            <Grid
                rows={rows}
                columns={columns}
                getRowId={getRowId}
                className={styles.campo}
            >
                <EditingState
                    onCommitChanges={commitChanges}
                    className={styles.campo}
                />
                <Table className={styles.campo} />
                <TableHeaderRow className={styles.campo} />
                <TableEditRow className={styles.campo} />
                <TableEditColumn
                    className={styles.campo}
                    showAddCommand
                    showEditCommand
                    showDeleteCommand
                />
            </Grid>
        </Paper>
    );
};