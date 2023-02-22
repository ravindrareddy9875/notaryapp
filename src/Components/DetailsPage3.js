import React,{useState} from 'react'
import "../Styles/DetailsPage3.css"
import axios from 'axios';
import { BsPerson } from 'react-icons/bs';
import Alert from '@mui/material/Alert';

const DetailsPage3 = () => {
    const [location,setlocation]=useState("")
    const [time,settime]=useState("")
    const [date,setdate]=useState("")
    const [isSuccess,setisSuccess]=useState(false)
    function postData(){
        axios.post("https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails",{location,time,date}).then((res)=>{
         
            if(res.data.msg==="Appointment Details saved")
            {
                setisSuccess(true)
            }
        })
    }
  return (
    <div>
        <div className='AllDivisions'>
            <div className='Header1'>
                <BsPerson className='PersonIcon'/>
                <p className='HeaderName'>Signer Details</p>
            </div>
            <hr></hr>
            <div className='LabelsAndInputs1'>
                <div>
                    <p className='Label'>Enter Signing Location</p>
                    <input type="text" placeholder='Signing Location' className='InputField' onChange={(e)=>setlocation(e.target.value)}></input>
                </div>
                <div style={{display:"flex"}}>
                    <div>
                        <p className='Label'>Date</p>
                        <input type="date" placeholder='Date' className='InputField' onChange={(e)=>setdate(e.target.value)}></input>
                    </div>
                    <div style={{marginLeft:"50px"}}>
                        <p className='Label'>Time</p>
                        <input type="time" placeholder='Time' className='InputField' onChange={(e)=>settime(e.target.value)}></input>
                    </div>
                </div>
           </div>

           <div>
            <p className='ScheduleButton' onClick={postData}>Schedule Appointment</p>
           </div>
        </div>
        {
            isSuccess ? <Alert severity="success">Appointment Details saved successfully</Alert> : null
        }
        
       
    </div>
  )
}

export default DetailsPage3