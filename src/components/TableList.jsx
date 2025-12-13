import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

export default function TableList({ list, setValue, setShowTable }) {
    const rows = [...list];

    return (
        <TableContainer component={Paper} sx={{ width: 500, maxHeight: 400, overflowY: 'auto' }}>
            <Table>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "#e0f7fa",
                                }, "&:hover": {
                                    backgroundColor: "#b2dfdb",
                                    cursor: "pointer",
                                },
                            }}
                            onClick={
                                () => {
                                    setValue(row.titulo[0])
                                    setShowTable(false)
                                }}>
                            <TableCell>{row.titulo[0]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}