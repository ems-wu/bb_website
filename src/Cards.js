import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Ib from './images/ib.png';
import Consulting from './images/consulting.png'
import Accounting from './images/accounting.png'


function Cards() {
    
    return (
<CardDeck>
  <Card>
    <Card.Img variant="top" src={Ib} />
    <Card.Body>
      <Card.Title>Investment Banking</Card.Title>
      <Card.Text>
      Investment banking involves assisting companies with deal transactions and giving financial advice. Become a general member to get access to networking advice, technical/behavioral interview tips, and a community to get all your questions answered!

      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src= {Consulting}/>
    <Card.Body>
      <Card.Title>Consulting</Card.Title>
      <Card.Text>
      Management Consulting is the practice of providing advice to companies and tackling challenging obstacles.  Become a general member to get access to market sizing tips, practice cases, sample frameworks, ​and a community to get all your questions answered!

      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src={Accounting} />
    <Card.Body>
      <Card.Title>Accounting</Card.Title>
      <Card.Text>
       Accounting is a career in which you will be checking companies financial statements and helping prevent fraud. Becoming a general member to get access to CPA practice, common behavioral questions, and a community to get all your questions answered!

      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
    );
}

export default Cards;