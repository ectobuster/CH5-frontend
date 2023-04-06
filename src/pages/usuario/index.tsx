import * as React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react';
import axios from 'axios';
import IUsuarios from 'src/interfaces/IUsuarios';

export default function Usuario() {



  const [rows, setRows] = useState([]);



  const [idBuscar, setIdBuscar] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8080/api/categoria/${idBuscar}`);
      const data = Array.isArray(response.data.users) ? response.data.users : [response.data.users];
      setRows(data);
      console.log(data);
    };
    fetchData();
  }, [idBuscar])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdBuscar(event.target.value);
  }


  return (
    <Container maxWidth="lg" sx={{ mt: 5 }} >
     <Box display="flex" justifyContent= 'space-between'>
     
     <Button onClick={() => setIdBuscar('')}>Challenge 5: API con buscador por ID</Button>
      <TextField
          id="outlined-number"
          label="Buscador por ID"
          type="number"
          value={idBuscar} onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      <Button onClick={() => setIdBuscar('')}>Borrar búsqueda</Button>
     </Box>

           <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripcion</TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Ruta</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {rows && rows.map ((row: IUsuarios) => (
                
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell>
                  {row.descripcion}
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.ruta}</TableCell>
                <TableCell>
                  acciones
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Container>
  );
}