import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { IoMdMail,IoMdPerson } from 'react-icons/io';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import '../Styles/PersonInfo.css';


const PersonInfo = () => {
    const [userData,setuserData]=useState()

    useEffect(()=>{

        // axios.get("https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse").then((res)=>{
        //     setuserData(res.data)
        // }).catch((err)=>{
        //     console.log(err)
        // })
        
    },[])

  return (
    <div>

     {/* The provided api is not wroking to fetch data if it works
     then the following code will show the user details */}

        {/* {
            userData.map((e,id)=>{
                return(
                    <div key={id}>
                        <p>{e.name}</p>
                        <p>{e.mobile}</p>
                    </div>
                )
            })
        } */}


        <div className='PersonDetails'>
            <div className='Header'>
                <img src='logo.png' alt='logo' className='Logo'></img>
                <p className='CompanyName'>Beinsurance</p>
            </div>
            
            <img src='person.png' alt='person' className='PersonDP'></img>
            <p className='PersonName'>Jocob Jones</p>

           <div className='EmailInfo'>
                <IoMdMail className='Icon'/>
                <p className='Detail'>jacson@gmail.com</p>
           </div>
           <div className='TeleInfo'>
                <BsTelephoneFill className='Icon'/>
                <p className='Detail'>(316) 555-0116</p>
           </div>
           <div className='AddressInfo'>
                <FiMapPin className='Icon'/>
                <p className='Detail'>318 RanchView Dr.Richardson <br></br>California 62639</p>
           </div>
           <div className='InsuranceInfo'>
                <IoMdPerson className='Icon'/>
                <p className='Detail'>Insurance ID 24792492</p>
           </div>
        </div>
    </div>
  )
}

export default PersonInfo