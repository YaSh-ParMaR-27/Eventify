import * as React from 'react';
import { useLocation } from 'react-router-dom';

import razorPayLogo from '../../assets/for_about_page.svg'

//material-ui components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    }
    document.body.appendChild(script); 
  })
}

const __DEV__ = document.domain === "localhost";

export default function EventCheckout() {
 
  const [expanded, setExpanded] = React.useState('panel1');
  const location = useLocation();
  console.log(location.state);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const displayRazorpay = async () => {
    const response = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!response) {
      alert('Razorpay SDK failed to load !!');
      return;
    }

    const res = await fetch('/razorpay',{
      method:'POST',
      headers:{
        Accept :"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name:location.state.userData.name, email:location.state.userData.email, mobile:location.state.userData.mobile, event_name:location.state.eventData.eventName}),
      credentials:"include"
    })
    if(res.status === 409){
      alert("User already registered");
    }
    else{
      const data = await res.json();

      console.log(data);

      const options = {
        "key": __DEV__ ? "rzp_test_awvEJcTXVbvHpz" : "PRODUCTION_KEY",
        "amount": data.amount.toString(), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": data.currency,
        "name": "EBS", //your business name
        "description": "Thank you", 
        "image": { razorPayLogo },
        "order_id": data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "callback_url": "http://localhost:3000/events",
        "handler": function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
        },
        "prefill": {
          "name": location.state.userData.name, //your customer's name
          "email": location.state.userData.email,
          "contact": location.state.userData.mobile
        },
        // "notes": {
        //     "address": "Razorpay Corporate Office",
        //     "name" : location.state.userData.name,
        //     "event_name":location.state.eventData.cardTitle
        // },
        // "theme": {
        //     "color": "#3399cc"
      }
      var paymentObj = new window.Razorpay(options);
      paymentObj.open();
    }
  };


const registerWithoutPay = async ()=>{
  const res = await fetch('/freeEventRegister',{
    method:'POST',
    headers:{
      "Content-Type" : "application/json"
    },
    body:JSON.stringify({name:location.state.userData.name, email:location.state.userData.email, mobile:location.state.userData.mobile, event_name:location.state.eventData.eventName}),
  })
  console.log(res)
  if(res.status === 201){
    alert("registered successfully");
  }
  else{
    alert("failed to register!! You might have already registered")
  }
  
}


  return (
    <div className='container my-4'>
      <div className=' sm:w-[70%] m-auto'>
        <h1 className='my-2 text-center text-xl text-decoration-underline'>Confirm your booking details</h1>

        <Accordion disabled  >
          <AccordionSummary
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Logged In As :</Typography>
            <Typography sx={{ fontSize: "15px" }}>{location.state.userData.email}</Typography>
          </AccordionSummary>
        </Accordion>

        <Accordion disabled expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ marginTop: '6px' }} >
          <AccordionSummary
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <div className=' w-[100%]'>
              <Typography sx={{ width: "fit-content" }}>Your Details : </Typography>
              <div className='w-[90%] flex flex-col justify-items-center'>
                <p className='w-fit ml-[37%]'>{location.state.userData.name}</p>
                <p className='w-fit ml-[37%]'>{location.state.userData.mobile}</p>
                <p className='w-fit ml-[37%]'>{location.state.userData.email}</p>
              </div>
            </div>
          </AccordionSummary>
        </Accordion>


        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ marginTop: '6px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Order Summary</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <div className='px-6 '>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr className='flex justify-between'>
                    <th>ITEM</th>
                    <th>SUBTOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='flex justify-between'>
                    <td>{location.state.eventData.eventName}</td>
                    <td><CurrencyRupeeIcon fontSize='12' />{location.state.eventData.price}</td>
                  </tr>
                  <tr className='flex justify-between'>
                    <td colSpan={2}>{location.state.eventData.date} | {location.state.eventData.time} </td>
                  </tr>
                  <hr style={{ border: "1px dashed black", marginTop: "4px", marginBottom: "4px" }} />
                  <tr className='flex justify-end'>
                    <td>+ Booking Charge </td>
                    <td className='ml-[5%]'><CurrencyRupeeIcon fontSize='1' />{location.state.eventData.price === 0 ? 0 : 1}</td>
                  </tr>
                  <tr className='flex justify-end'>
                    <td>Total</td>
                    <td className='ml-[2%]'><CurrencyRupeeIcon fontSize='1' />{location.state.eventData.price === 0 ? 0 :  location.state.eventData.price+1}</td>
                  </tr>
                  <hr style={{ border: "1px dashed black", marginTop: "4px", marginBottom: "4px" }} />
                  <tr className='flex justify-center'>
                    <Button onClick={location.state.eventData.price === 0 ? registerWithoutPay : displayRazorpay } variant='contained'>Continue</Button>
                  </tr>
                </tbody>
              </table>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}