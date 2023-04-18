import * as React from 'react';

//MUI
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//icons and styles
import Delete from '../../Assets/Icons/delete.png';
import Edit from '../../Assets/Icons/edit.png';
import Create from '../../Assets/Icons/create.png';
import './HomeAdmin.sass'
function createData(name, category, price, rent) {
    return { name, category, price, rent };
}

//a ese array le falta la descripción y una id y una imagen
const rows = [
    createData('behind you', 'terror', 100, true),
    createData('2 SISTERS DETECTIVE AGENCY', 'police', 25, true),
    createData('100 years of Solitude', 'adventure', 45, true),
    createData('Los tres nombres de Ludka', 'adventure', 12, false),
    createData('Domain', 'overcoming', 12, true),
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  

const HomeAdmin = () => {
    return (
        <div className='homeAdmin'>
            <div className='gridHomeAdmin'>
                <h1>Home Admin</h1>
                <button id='create' name='create' className='button buttonCreate'>
                    <img src={Create} width={45} alt='create' />
                </button>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Book Name</StyledTableCell>
                            <StyledTableCell align="center">Category</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">availability to rent</StyledTableCell>
                            <StyledTableCell align="center">Changes</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.category}</TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">{row.rent === true ? "Availability " : "No"}</TableCell>
                                <TableCell align="center">
                                    <div className='buttonsChanges'>
                                        <button
                                            className='button buttonEdit'
                                            id={row.name}
                                            name={row.name}
                                        >
                                            <img src={Edit} width={35} alt='edit' />
                                        </button>
                                        <button
                                            className='button buttonDelete'
                                            id={row.name}
                                            name={row.name}
                                        >
                                            <img src={Delete} width={25} alt='delete' />
                                        </button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default HomeAdmin