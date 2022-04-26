import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState,useEffect } from 'react';
import './CryptoData.css'
import { Container } from 'react-bootstrap';

const CryptoData = () => {
  const [data,newData] = useState([])
  const CryptoData = async  () => {
      const fetchData = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      const jsonData = await fetchData.json();
      console.log(jsonData)
      newData(jsonData)
  }
  useEffect(()=>{
    CryptoData();
  })
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => { 
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? data
    : data.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
  
  return (<>
  <Container className='text-center pt-5'>
  <input placeholder='🔍 Search...' value={search} onChange={handleSearchChange} className="input-field" />
  </Container>
   <Container className='py-5'>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Crypto Coins</b></TableCell>
            <TableCell align="right"><b>Symbol</b></TableCell>
            <TableCell align="right"><b>24h (%)</b></TableCell>
            <TableCell align="right"><b>High (24h)</b></TableCell>
            <TableCell align="right"><b>Low (24h)</b></TableCell>
            <TableCell align="right"><b>Current Price &#8377; </b></TableCell>
            <TableCell align="right"><b>Market Cap &#8377;</b></TableCell>
            <TableCell align="right"><b>Volume &#8377; </b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.image} style={{width:18}}/> {row.name}
              </TableCell>
              <TableCell align="right" className='grey'>{(row.symbol).toUpperCase()}</TableCell>
              <TableCell align="right" className= {( row.price_change_percentage_24h > 0)? "green":"red"}>{(row.price_change_percentage_24h).toFixed(2)}%</TableCell>
              <TableCell align="right">{(row.high_24h).toLocaleString()}</TableCell>
              <TableCell align="right">{(row.low_24h).toLocaleString()}</TableCell>
              <TableCell align="right">{(row.current_price).toLocaleString()}</TableCell>
              <TableCell align="right">{(row.market_cap).toLocaleString()}</TableCell>
              <TableCell align="right">{(row.total_volume).toLocaleString()}</TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </>
  );
  
}

export default CryptoData