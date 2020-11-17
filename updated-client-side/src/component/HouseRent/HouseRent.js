import React, {useState,useEffect} from 'react';
import HouseRentData from './HouseRentData';
import axios from 'axios';


const HouseRent = () => {

const [bookingData, setBookingData] = useState([]);

useEffect(()=>{
    const fetchData=async()=>{
         const {data}=await axios.get(`http://localhost:5000/getData`)
         setBookingData(data)
    }
    fetchData()
},[])

    return (
        <div style={{background:'#F1F6F4'}}>
            <div className="container py-5">
                <h6 style={{ textAlign: 'center',color:'#275A53' }}>House Rent</h6>
                <h1 style={{ textAlign: 'center', color: '#16322E',fontWeight:'700' }}>Discover the latest Rent <br /> available today</h1>
                <div className="row">
                {
                    bookingData.map(data =><HouseRentData key={data._id} data={data}></HouseRentData>)    
                }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;