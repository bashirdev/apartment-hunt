import React, {useState,useEffect} from 'react';
// import { useParams} from 'react-router-dom';
import axios from 'axios';
import {Row, Col, Image, ListGroup, Card,Container, Button, Form} from 'react-bootstrap';

const BookingForm = () => {

 
    const [postData, setPostdata] =useState(
        {  name: '',
           number: '',
           email:'', 
          message:''
        });

    // useEffect(()=>{
    //     const postDetails=async() => {
    //         const {data}=await axios.get('http://localhost:5000/sendInfo',{
    //             method: 'POST',
              
    //         })
    //       setPostdata(data)
    //         console.log(data);
    //     }
    //     postDetails();
    // },[])
    
    const handleSubmit =(event)=>{
    
       fetch(`http://localhost:5000/sendInfo`, {
        method:'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify(postData),
         })
        .then( res => res.json())
        .then( data => {
            if(data){
                setPostdata({name:'', number:'', email:'',message:''})
                alert('information sent successfully')
                console.log(data);
            }
        })
        event.preventDefault();   
    }

    return (
        <>
              <Form onSubmit={handleSubmit}>
  <Form.Group>
      <Form.Control type="text"
       onChange={(e)=> setPostdata({...postData, name: e.target.value})}
        placeholder="Full Name" name='name' value={postData.name} 
       
        />
  </Form.Group>
  <Form.Group>
      <Form.Control type="Number"
       onChange={(e)=> setPostdata({...postData, number: e.target.value})} 
       placeholder="Phone Number" name='number' value={postData.number}
       
        />
  </Form.Group>
  <Form.Group>
      <Form.Control type="email"
       onChange={(e)=> setPostdata({...postData, email: e.target.value})}
        placeholder="Email" name='email' value={postData.email} 

        />
  </Form.Group>
  <Form.Group >
    <Form.Control as="textarea"
     onChange={(e)=> setPostdata({...postData, message: e.target.value})} 
      placeholder="Message" name='message' value={postData.message}  rows={3} 

      />
  </Form.Group>
  <Button variant="primary" className='w-100' >
    Submit
      </Button>
    </Form>  
        </>
    );
};

export default BookingForm;
