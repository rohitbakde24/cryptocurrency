
import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import './News.css'

const News = () => {
    const [crypto,cryptoNews] = useState([])

    const CryptoNewsData = async () =>{
        const response = await fetch ("https://newsapi.org/v2/everything?q=crypto&apiKey=375368ae21c2405185e0693370f8115f")
        const responseJson = await response.json();
        cryptoNews(responseJson.articles)
    }
    useEffect(()=>{
        CryptoNewsData();
    })
  return (
    <>
      <div className='display'>
    {crypto.map((value)=><>
    <Card  style={{ width: '18rem',height:"500px"}}>
  <Card.Img variant="top" src={value.urlToImage} style={{height:"200px"}} />
  <Card.Body>
    <Card.Title>{value.title}</Card.Title>
    <Card.Text>
     {(value.description).substr(0,150)}
    </Card.Text>
    <a href={value.url} target="_blank" className="view-more"><b>view more &#10148;</b></a>
  </Card.Body>
</Card>
</>)}
</div>


    </>
  )
}

export default News