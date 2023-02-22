import React from 'react'
import "../Styles/DetailsPage2.css"
import { BsPerson } from 'react-icons/bs';

const DetailsPage2 = () => {
  return (
   <div className='AllDivisions'>
    
        <div>
            <div className='Header1'>
                <BsPerson className='PersonIcon'/>
                <p className='HeaderName'>Signer Details</p>
            </div>
            <hr></hr>
            <div className='LabelsAndInputs'>
                <div>
                    <p className='Label'>Full Name</p>
                    <input type="text" placeholder='name' className='InputField'></input>
                    <p className='Label'>Email</p>
                    <input type="email" placeholder='Email' className='InputField'></input>
                </div>
                <div style={{marginLeft:"90px"}}>
                    <p className='Label'>Phone Number</p>
                    <input type="number" placeholder='Phone' className='InputField'></input>
                </div>
           </div>
        </div>



        <div>
            <div className='Header1'>
                <BsPerson className='PersonIcon'/>
                <p className='HeaderName'>Title Company Details</p>
            </div>
            <hr></hr>
            <div className='LabelsAndInputs'>
                <div>
                    <p className='Label'>Company Name</p>
                    <input type="text" placeholder='Company name' className='InputField'></input>
                    <p className='Label'>Email</p>
                    <input type="email" placeholder='Email' className='InputField'></input>
                </div>
                <div style={{marginLeft:"90px"}}>
                    <p className='Label'>Agent Name</p>
                    <input type="email" placeholder='Agent name' className='InputField'></input>
                    <p className='Label'>Phone Number</p>
                    <input type="number" placeholder='Phone' className='InputField'></input>
                </div>
            </div>
        </div>




        <div>
            <div className='Header1'>
                <BsPerson className='PersonIcon'/>
                <p className='HeaderName'>Order Info</p>
            </div>
            <hr></hr>
            <div className='LabelsAndInputs'>
                <div>
                    <p className='Label'>Escrow #/Loan No</p>
                    <input type="text" placeholder='Loan No' className='InputField'></input>
                </div>
                <div style={{marginLeft:"90px"}}>
                    <p className='Label'>Property Address</p>
                    <input type="text" placeholder='Address' className='InputField'></input>
                </div>
          </div>
        </div>

   </div>
  )
}

export default DetailsPage2