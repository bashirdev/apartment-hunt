
import React, {useState,useEffect} from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Image, ListGroup, Card,Container, Button, Form} from 'react-bootstrap';
import BookingForm from './BookingForm';
const BookingDetails = ({match}) => {
    const {id}= useParams();
    const [bookingDetails, setBookingDetails] =useState({});
    
    useEffect(()=>{
        const fetchDetails=async() => {
            const {data}=await axios.get('http://localhost:5000/getData/'+id)
            setBookingDetails(data)
            console.log(data);
        }
        fetchDetails();
    },[])
    return (
        <>
       
        <Container>
        <Row>
        <Card md={5} className='mr-5 p-3' >
         <Image style={{height:'300px'}} className='m-3' src={bookingDetails.image} alt={bookingDetails.name} fluid />
         
         <Row>
             <Card className='m-2' md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card className='m-2'  md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card  className='m-2' md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
             <Card  className='m-2' md={3}>
             <Image style={{height:'100px'}} src={bookingDetails.image} alt={bookingDetails.name} fluid />
             </Card>
         </Row>
         </Card>
        <Card className='p-5'>
    <BookingForm />
 </Card>
 </Row>
    <Row>
      <Col className='mt-5' md={4}>
        <h2 className='mr-5'>{bookingDetails.houseName}</h2>
        </Col>
      <Col className='mt-5' md={4}>
      <h2>{bookingDetails.price}</h2>
     </Col>
     <Col className='mt-5' md={12}>
     <p>Motel One Manchester-Piccadilly is a 7-minute walk from Manchester Conference Centre. The hotel is 6 km from Old Trafford Stadium. The National Trust Quarry Bank Mill is 19.8 km from the hotel and Manchester Airport can be reached by car in 25 minutes.</p> </Col>
     <Col className='mt-5' md={12}>
     <h3>Price details</h3>
     <pre><strong>Per Night: {bookingDetails.price}</strong><br/>
     ‎Book Now · ‎Book for Tomorrow · ‎Book for Tonight · ‎One Day Only · ‎Secure Booking
     </pre>
      </Col>
    </Row>
                 
 </Container>
        </>
    );
};

export default BookingDetails;